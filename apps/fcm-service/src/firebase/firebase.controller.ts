/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Controller, Post, Body } from '@nestjs/common';
import { FirebaseService } from './firebase.service';
import { MyMessageBrokerTopics } from 'src/rabbitmq/topics';
import { EventPattern, Payload } from '@nestjs/microservices';
import { RabbitMQMessage } from 'src/rabbitmq/RabbitMQMessage';

@Controller('push-notifications')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) { }

  // @Post()
  // async sendNotification(@Body() body: { token: string, message: string }) {
  //   await this.firebaseService.sendPushNotification(body.token, body.message);
  // }
  @EventPattern(MyMessageBrokerTopics.NotiToAdmin)
  sendNotification(@Payload()
  message: RabbitMQMessage) {
    const { data } = message as any;
    console.log("fcm", data);
    // this.notificationsGateway.sendNotification(notification);
    return { success: true };
  }
}
