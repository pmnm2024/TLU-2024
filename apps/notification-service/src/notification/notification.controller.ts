import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NotificationService } from "./notification.service";
import { NotificationControllerBase } from "./base/notification.controller.base";
import { EventPattern, Payload } from "@nestjs/microservices";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { RabbitMQMessage } from "src/rabbitmq/RabbitMQMessage";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationController extends NotificationControllerBase {
  constructor(protected readonly service: NotificationService) {
    super(service);
  }

  @EventPattern(MyMessageBrokerTopics.ResetPassword)
  async onOrderStatus(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {
    try {
      const { data } = message as any;
      const { userId, email, token, name } = data
      const payLoad = {
        data: {
          user: userId,
          message: `${userId} reset password send`,
          title: MyMessageBrokerTopics.ResetPassword
        },
        select: {},
      }
      await this.service.createNotification(
        payLoad
      )
      await this.service.publishMessage(data)
      return;
    } catch (error) {
      throw error;
    }
  }
}
