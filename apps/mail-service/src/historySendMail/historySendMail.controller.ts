/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HistorySendMailService } from "./historySendMail.service";
import { HistorySendMailControllerBase } from "./base/historySendMail.controller.base";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { EventPattern, Payload } from "@nestjs/microservices";
import { RabbitMQMessage } from "src/rabbitmq/RabbitMQMessage";

@swagger.ApiTags("historySendMails")
@common.Controller("historySendMails")
export class HistorySendMailController extends HistorySendMailControllerBase {
  constructor(protected readonly service: HistorySendMailService) {
    super(service);
  }

  @EventPattern(MyMessageBrokerTopics.SendMail)
  async onHandleSendMail(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {
    try {
      const { data } = message as any;
      console.log("🚀 ~ NotificationController ~ data:", data)

      await this.service.processSendMail(data)
      return;
    } catch (error) {
      throw error;
    }
  }
}
