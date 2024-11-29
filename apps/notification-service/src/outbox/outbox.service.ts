import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OutboxServiceBase } from "./base/outbox.service.base";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";

@Injectable()
export class OutboxService extends OutboxServiceBase {
  constructor(protected readonly prisma: PrismaService, protected readonly rabbitProducer: RabbitMQProducerService) {
    super(prisma);
  }

  async processOutboxEvents() {
    const events = await this.prisma.outbox.findMany({
      where: { status: 'pending' }
    });

    const transactionPromises = events.map(async (event: any) => {
      const prismaTransaction = this.prisma.$transaction(async (prisma) => {
        try {
          // Emit the message to RabbitMQ
          await this.rabbitProducer.emitMessage(event.eventType as MyMessageBrokerTopics, event.payload);

          // Update the status to 'processed'
          await prisma.outbox.update({
            where: { id: event.id },
            data: {
              status: 'processed',
              processedDate: new Date(),
              retry: 0,
            },
          });
        } catch (error) {
          console.error(`Failed to send event ${event.id}:`, error);

          const retryCount = event.retry || 0;
          if (retryCount >= 3) {
            console.error(`Event ${event.id} reached max retry count.`);
            await prisma.outbox.update({
              where: { id: event.id },
              data: {
                status: 'failed',
                retry: retryCount + 1,
              },
            });
          } else {
            await prisma.outbox.update({
              where: { id: event.id },
              data: {
                retry: retryCount + 1,
              },
            });
          }
        }
      });

      return prismaTransaction;
    });

    // Wait for all events to be processed
    await Promise.all(transactionPromises);
  }

}
