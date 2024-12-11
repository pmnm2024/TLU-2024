/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { PrismaService } from "../prisma/prisma.service";
import { DonationServiceBase } from "./base/donation.service.base";
import { BadGatewayException, BadRequestException, Injectable } from "@nestjs/common";
import { RabbitMQProducerService } from "src/rabbitmq/rabbitmq.producer.service";
import { Prisma, Donation, EnumDonationStatus } from "@prisma/client";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { ConfigService } from "@nestjs/config";
import moment from "moment";
import querystring from "qs";
import crypto from 'crypto';
import { VnpayService } from "nestjs-vnpay";
import { ProductCode, VnpLocale } from "vnpay";

@Injectable()
export class DonationService extends DonationServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly rabbitProducer: RabbitMQProducerService,
    protected configService: ConfigService,
    private readonly vnpayService: VnpayService

  ) {
    super(prisma);
  }
  protected readonly url = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html"
  protected readonly returnUrl = "http://localhost:3006/orderSuccess"
  protected readonly tmnCode = "QNZ5WKJK"
  protected readonly secretKey = "WJ65OFRVFTLCGBU22P3KK3RXLNKWRT0D"
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
            description: `<!DOCTYPE html>
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

    return this.prisma.donation.create(args);
  }

  async createOrder(req: any) {
    try {

      const { description, amount, fullName, phone, city, ward, district } = req.body
      const donate = await this.createDonation(
        {
          data: {
            status: "Pending",
            amount: amount,
            bank: 'VNPAY',
            fullName,
            description,
            phone,
            supportRequestTypeName: "Tiền",
            city,
            ward,
            district
          },
          select: {
            accountNumber: true,
            amount: true,
            bank: true,
            city: true,
            createdAt: true,
            description: true,
            detailAddress: true,
            district: true,
            email: true,
            fullName: true,
            id: true,
            paymentMethod: true,
            phone: true,
            status: true,
            supportRequestTypeId: true,
            supportRequestTypeName: true,
            updatedAt: true,
            userId: true,
            ward: true,
          },
        }
      )

      if (!donate) {
        throw new BadGatewayException("Donate fail!")

      }
      const paymentUrl = this.vnpayService.buildPaymentUrl({
        vnp_Amount: amount,
        vnp_IpAddr:
          req.headers['x-forwarded-for'] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.ip,
        vnp_TxnRef: donate.id,
        vnp_OrderInfo: description ? description : `Đơn donate ${donate.id}`,
        vnp_OrderType: ProductCode.Other,
        vnp_ReturnUrl: 'http://localhost:3001/vnpay-return',
        vnp_Locale: VnpLocale.VN,
      });
      return { code: '00', data: paymentUrl }

    } catch (error) {
      throw error
    }
  };

  async verify(donateId: string, amount: number, bank: string | undefined, bankCode: string | undefined) {
    try {
      const donate = await this.prisma.donation.findFirst({
        where: {
          id: donateId,
        }
      })

      if (!donate) {
        throw new BadRequestException("Không tồn tại donate")
      }

      if (donate.status === EnumDonationStatus.Processed) {
        throw new BadGatewayException("Donate đã được xử lý!")
      }

      if (donate.amount !== amount) {
        throw new BadGatewayException("Có hacker!!")
      }

      return await this.prisma.donation.update({
        where: {
          id: donateId
        },
        data: {
          status: EnumDonationStatus.Processed,
          paymentMethod: "BankTransfer",
          bank,
          accountNumber: bankCode
        }
      })

    } catch (error) {
      throw error
    }
  }

  genRequestCode() {
    const characters = '0123456789';  
    let result = 'DN'; 

    const year = new Date().getFullYear().toString().slice(-2);

    result += year;

    for (let i = 0; i < 5; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }

  async getByUser(userId: string) {
    try {
      if (!userId) throw new BadRequestException("Hackerr!!")
      const requests = await this.prisma.donation.findMany({
        where: {
          userId: userId
        }
      })
      return requests
    } catch (error) {
      throw error
    }
  }
}
