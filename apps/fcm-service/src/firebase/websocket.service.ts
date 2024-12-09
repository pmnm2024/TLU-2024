/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { 
    WebSocketGateway, 
    WebSocketServer, 
    SubscribeMessage, 
    MessageBody, 
    OnGatewayConnection, 
    OnGatewayDisconnect 
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({
    cors: {
      origin: '*', // Điều chỉnh origin theo nhu cầu bảo mật
    },
  })
  export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server!: Server;
  
    handleConnection(client: Socket) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
    }
  
    // Gửi thông báo tới tất cả client
    sendNotification(notification: any) {
      this.server.emit('new-notification', notification);
    }
  
    // Ví dụ: Nhận thông báo từ client (nếu cần)
    @SubscribeMessage('send-notification')
    handleSendNotification(@MessageBody() data: any): void {
      this.sendNotification(data);
    }
  }
  