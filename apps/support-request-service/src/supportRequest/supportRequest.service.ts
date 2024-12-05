import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SupportRequestServiceBase } from "./base/supportRequest.service.base";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";
import { Prisma, SupportRequest, SupportRequestDetail } from "@prisma/client";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class SupportRequestService extends SupportRequestServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly rabbitProducer: RabbitMQProducerService,
    protected configService: ConfigService,

  ) {
    super(prisma);
  }
  async handleSupportRequest(id: string, status: string, warehouse: any[]): Promise<SupportRequest> {
    try {
      if (!id) {
        throw new BadRequestException("SupportRequestID is required");
      }
  
      const supportRequest = await this.prisma.supportRequest.findUnique({
        where: { id: id },
      });
      
      if (!supportRequest) {
        throw new BadRequestException("SupportRequest not found");
      }
  
  
      if (status === "Processed") {
        const warehousePayload = warehouse.map(item => ({
          id: item.wareHouseId,
          quantity: item.quantity,
        }));
    
        // Xây dựng các truy vấn tạo bản ghi supportRequestDetail
        const createDetailsQueries = warehouse.map((detail) =>
          this.prisma.supportRequestDetail.create({
            data: {
              ...detail,  
              supportRequestID: id,  
            },
          })
        );
        await this.prisma.$transaction([
          this.prisma.outBox.create({
            data: {
              eventType: MyMessageBrokerTopics.HandleWarehouse,
              payload: {
                warehouse: warehousePayload,
              },
              retry: 3,
              status: "pending",
            },
          }),
          ...createDetailsQueries,
          this.prisma.outBox.create({
            data: {
              eventType: MyMessageBrokerTopics.HandleSupportRequest,
              payload: {
                email: supportRequest.email,
                description: `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Support Request Processed</title>
                </head>
                <body>
                  <h1>Your support request has been processed</h1>
                </body>
                </html>`,
              },
              retry: 3,
              status: "pending",
            },
          }),
        ]);
        
  
        return this.prisma.supportRequest.update({
          where: { id: id },
          data: { status: "Processed" },
        });
      } else if (status === "Refused") {
        await this.prisma.$transaction([
          this.prisma.outBox.create({
            data: {
              eventType: MyMessageBrokerTopics.HandleSupportRequest,
              payload: {
                email: supportRequest.email,
                description: `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Support Request Refused</title>
                </head>
                <body>
                  <h1>Your support request has been refused</h1>
                </body>
                </html>`,
              },
              retry: 3,
              status: "pending",
            },
          }),
        ]);
  
        return this.prisma.supportRequest.update({
          where: { id: id },
          data: { status: "Refused" },
        });
      } else {
        throw new BadRequestException("Invalid status");
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to handle support request");
    }
  }
  
  
  

  
}

