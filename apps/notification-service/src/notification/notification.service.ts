import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationServiceBase } from "./base/notification.service.base";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";


@Injectable()
export class NotificationService extends NotificationServiceBase {
  constructor(protected readonly prisma: PrismaService, protected readonly rabbitProducer: RabbitMQProducerService) {
    super(prisma);
  }

  async publishMessage(data: any) {
    await this.rabbitProducer.emitMessage(MyMessageBrokerTopics.SendMail,
      data
    )
  }
}
