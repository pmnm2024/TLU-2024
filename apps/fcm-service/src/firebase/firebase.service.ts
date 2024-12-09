import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as path from 'path';

@Injectable()
export class FirebaseService {
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(path.join(__dirname, './pmnm2024.json')),
        });
    }

    async sendPushNotification(token: string, message: string) {
        const payload: admin.messaging.Message = {
            notification: {
                title: 'Thông báo mới',
                body: message,
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
