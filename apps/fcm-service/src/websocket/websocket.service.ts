/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// notifications.service.ts
import { Injectable } from '@nestjs/common';
import { FcmService } from 'src/fcm/fcm.service';


@Injectable()
export class WebSocketService {
    constructor(
        private readonly fmcUservice: FcmService,
        // private readonly notificationsGateway: NotificationsGateway,
    ) { }

    // async sendNotification(userId: string, notificationData: any) {
    //     await this.fmcUservice.createFcm({
    //         data: {
    //             userId,
    //             title: notificationData.title,
    //             message: notificationData.message,
    //             read: "false",
    //         }
    //     });

    //     this.notificationsGateway.sendNotificationToUser(userId, notificationData);
    // }

    async getUnreadNotifications(userId: string) {
        return this.fmcUservice.findByUser(userId, 'false');
    }

    // Đánh dấu thông báo đã đọc
    async markAsRead(notificationId: string) {
        await this.fmcUservice.updateStatus(notificationId);
    }
}
