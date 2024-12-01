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

  async customCreate(data: any) {
    try {
      const { userId, email, description } = data
      const notification = await this.prisma.notification.findFirst({
        where: {
          user: userId,
          status: false
        }
      })
      if (notification) {
        throw new Error("Email sent")
      }

      const payLoad = {
        data: {
          user: userId,
          message: `${userId} reset password send`,
          title: MyMessageBrokerTopics.ResetPassword
        },
        // select: {},
      }

      await this.prisma.$transaction([
        this.prisma.notification.create(
          payLoad
        ),

        this.prisma.outbox.create({
          data: {
            eventType: MyMessageBrokerTopics.SendMail,
            payload: {
              userId: userId,
              email: email,
              description: description
            },
            retry: 3,
            status: "pending"
          },
        }),
      ]);
    } catch (error) {
      throw error
    }
  }
}
