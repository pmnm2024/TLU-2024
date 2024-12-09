/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MyMessageBrokerTopics } from 'src/rabbitmq/topics';
import { RabbitMQMessage } from 'src/rabbitmq/RabbitMQMessage';


@Controller('websocket')
export class WebsocketController {
    constructor(private readonly notificationsGateway: NotificationsGateway) { }

    @EventPattern(MyMessageBrokerTopics.NotiToAdmin)
    sendNotificationWebsocket(@Payload()
    message: RabbitMQMessage) {
        const { data } = message as any;
        const { listAdmin, mess } = data;
        // console.log("websocket", data);
        listAdmin.map((item: any) => {
            this.notificationsGateway.sendNotification(item.id, mess);
        })
        return { success: true };
    }
}
