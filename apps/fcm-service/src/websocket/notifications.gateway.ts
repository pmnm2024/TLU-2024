/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
// notifications.gateway.ts (Chỉnh sửa handleConnection)
import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { Injectable, Logger } from '@nestjs/common';
import { FcmService } from 'src/fcm/fcm.service';

interface UserSocket {
    userId: string;
    socket: Socket;
}

@Injectable()
@WebSocketGateway({
    cors: {
        origin: '*', // Điều chỉnh origin theo nhu cầu bảo mật
    },
})
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    server!: Server;
    constructor(
        private readonly fmcUservice: FcmService,
    ) { }
    private logger: Logger = new Logger('NotificationsGateway');

    private userSockets: Map<string, Socket> = new Map();

    // constructor( private readonly webSocketService: WebSocketService) { }

    async handleConnection(client: Socket) {
        try {
            const token = client.handshake.query.token as string;
            if (!token) {
                this.logger.warn(`Client ${client.id} không gửi token. Ngắt kết nối.`);
                client.disconnect();
                return;
            }

            // const payload = 
            const userId = '1';

            this.userSockets.set(userId, client);
            this.logger.log(`Client ${client.id} kết nối thành công với userId: ${userId}`);

            const unreadNotifications = await this.getUnreadNotifications(userId);
            unreadNotifications.forEach(notification => {
                client.emit('new-notification', {
                    title: notification.title,
                    message: notification.message,
                    // icon: ,
                    id: notification.id,
                });
            });
        } catch (error: any) {
            this.logger.error(`Lỗi xác thực cho client ${client.id}:`, error.message);
            client.disconnect();
        }
    }

    handleDisconnect(client: Socket) {
        const userId = Array.from(this.userSockets.entries()).find(([_, s]) => s.id === client.id)?.[0];
        if (userId) {
            this.userSockets.delete(userId);
            this.logger.log(`Client ${client.id} ngắt kết nối và đã xóa userId: ${userId} khỏi map`);
        } else {
            this.logger.warn(`Client ${client.id} ngắt kết nối nhưng không tìm thấy userId trong map`);
        }
    }

    sendNotificationToUser(userId: string, notification: any) {
        const client = this.userSockets.get(userId);
        if (client) {
            client.emit('new-notification', notification);
            this.logger.log(`Gửi thông báo tới userId: ${userId}`);
        } else {
            this.logger.warn(`Không tìm thấy socket cho userId: ${userId}. Thông báo sẽ được lưu trữ cho lần kết nối tiếp theo.`);
        }
    }

    // Ví dụ: Nhận thông báo từ client (nếu cần)
    @SubscribeMessage('send-notification')
    handleSendNotification(@MessageBody() data: any, @ConnectedSocket() client: Socket): void {
        this.sendNotificationToAll(data);
    }

    // Gửi thông báo tới tất cả client
    sendNotificationToAll(notification: any) {
        this.server.emit('new-notification', notification);
        this.logger.log(`Gửi thông báo tới tất cả client: ${JSON.stringify(notification)}`);
    }

    async sendNotification(userId: string, notificationData: any) {
        const result = await this.fmcUservice.createFcm({
            data: {
                userId,
                title: notificationData.title,
                message: notificationData,
                read: "false",
            }
        });
        console.log(result);
        this.sendNotificationToUser(userId, notificationData);
    }

    async getUnreadNotifications(userId: string) {
        return this.fmcUservice.findByUser(userId, 'false');
    }

    // Đánh dấu thông báo đã đọc
    async markAsRead(notificationId: string) {
        await this.fmcUservice.updateStatus(notificationId);
    }
}
