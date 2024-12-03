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
  async handleSupportRequest(id: string, status: string, data: any[]): Promise<SupportRequest> {
    if (status == "Processed") {
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
  
        // Xây dựng các truy vấn tạo bản ghi
        const createDetailsQueries = data.map((detail) =>
          this.prisma.supportRequestDetail.create({ data: detail })
        );
  
        await this.prisma.$transaction([
          this.prisma.outBox.create({
            data: {
              eventType: MyMessageBrokerTopics.HandleSupportRequest,
              payload: {
                email: supportRequest.email,
                warehouse: data, 
              },
              retry: 3,
              status: "pending",
            },
          }),
  
          // Thực thi tất cả các truy vấn tạo bản ghi chi tiết
          ...createDetailsQueries,
        ]);
  
        return this.prisma.supportRequest.update({
          where: { id: id },
          data: { status: "Processed" },
        });
      } catch (error) {
        console.error(error);
        throw new Error("Failed to handle support request");
      }
    } else {
      return this.prisma.supportRequest.update({
        where: { id: id },
        data: { status: "Refused" },
      });
    }
  }
  

  
}

