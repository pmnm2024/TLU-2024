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

      await this.service.customCreate(data);
      return;
    } catch (error) {
      throw error;
    }
  }

  @EventPattern(MyMessageBrokerTopics.Donate)
  async onHanldeDonate(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {
    try {
      const { data } = message as any;

      await this.service.addDonation(data);
      return;
    } catch (error) {
      throw error;
    }
  }


  @EventPattern(MyMessageBrokerTopics.HandleSupportRequest)
  async onHandleSupportRequest(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {
    try {
      const { data } = message as any;

      await this.service.handleSupportRequest(data);
      return;
    } catch (error) {
      throw error;
    }
  }

}
