/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';
import { FcmService } from 'src/fcm/fcm.service';

@Injectable()
export class FirebaseService {
    constructor(
        private readonly fcmService: FcmService
    ) {
        admin.initializeApp({
            credential: admin.credential.cert(path.join(__dirname, './pmnm2024.json')),
        });
    }

    async sendPushNotification(token: string, userId: string, message: string, title: string) {
        const fcm = await this.fcmService.createFcm({
            data: { message: message, read: 'false', title, userId }
        })
        const bodynew = {
            id: fcm.id,
            message: fcm.message,
            title: fcm.title,
            userId: fcm.userId,
            read: fcm.read
        }
        const payload: admin.messaging.Message = {
            notification: {
                title: title,
                body: JSON.stringify(bodynew),
            },
            token: token,
        };

        try {
            const response = await admin.messaging().send(payload);
            console.log('Push notification sent successfully:', response);
        } catch (error) {
            console.error('Error sending push notification:', error);
        }
    }
}
