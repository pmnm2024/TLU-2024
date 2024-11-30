
import { PrismaService } from "../prisma/prisma.service";
import { DonationServiceBase } from "./base/donation.service.base";
import { Injectable} from "@nestjs/common";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";
import { Prisma, Donation} from "@prisma/client";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { ConfigService } from "@nestjs/config";
@Injectable()
export class DonationService extends DonationServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly rabbitProducer: RabbitMQProducerService,
    protected configService: ConfigService,
    
  ) {
    super(prisma);
  }
  async addDonation(
    args: Prisma.DonationCreateArgs
  ): Promise<Donation> {

    await this.prisma.$transaction([
      this.prisma.outBox.create({
        data: {
          eventType: MyMessageBrokerTopics.Donate,
          payload: {
            userId: args.data.userId,
            email: args.data.email,
            name: args.data.fullName,
            token: `<!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Thank you for your donation</title>
            </head>
            <body>
              <h1>Thank you</h1>
            </body>
            </html>`

          },
          retry: 3,
          status: "pending"
        },
      }),
    ]);
    args.data.status = "Pending";
    return this.prisma.donation.create(args);
  }
}
