/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DonationService } from "./donation.service";
import { DonationControllerBase } from "./base/donation.controller.base";
import { Public } from "src/decorators/public.decorator";
import { DonationCreateInput } from "./base/DonationCreateInput";
import { Donation } from "./base/Donation";
import { ApiNestedQuery } from "src/decorators/api-nested-query.decorator";
import { DonationFindManyArgs } from "./base/DonationFindManyArgs";
import { plainToClass } from "class-transformer";
import { VnpayService } from "nestjs-vnpay";
import { ProductCode, VerifyReturnUrl, VnpLocale } from "vnpay";
@swagger.ApiTags("donations")
@common.Controller("donations")
export class DonationController extends DonationControllerBase {
  constructor(protected readonly service: DonationService, private readonly vnpayService: VnpayService) {
    super(service);
  }
  @Public()
  @common.Post("/addDonation")
  async addDonation(@common.Body() data: DonationCreateInput): Promise<Donation> {
    try {
      const payLoad = {
        data: data,
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
        }
      }
      return await this.service.addDonation(payLoad)
    } catch (error) {
      throw error
    }
  }


  @common.Get("/getDonationByUserId")
  @swagger.ApiOkResponse({ type: [Donation] })
  async getDonationByUserId(@common.Request() req: any,): Promise<Donation | null> {
    const user = JSON.parse(req.headers.user);
    return this.service.donation({
      where: { id: user.sub },
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
    });
  }

  @Public()
  @common.Post("/createdVNPAY")
  async createOrder(@common.Req() req: any) {
    try {
      const result = await this.service.createOrder(req)
      return result
    } catch (error) {
      throw error
    }
  }

  @Public()
  @common.Post("/order")
  async order(@common.Req() req: any) {
    try {
      const order = '123' // Hàm tạo đơn hàng, bạn cần tự cài đặt

      // Tạo URL thanh toán
      const paymentUrl = this.vnpayService.buildPaymentUrl({
        vnp_Amount: 10000,
        vnp_IpAddr:
          req.headers['x-forwarded-for'] ||
          req.connection.remoteAddress ||
          req.socket.remoteAddress ||
          req.ip,
        vnp_TxnRef: '12345111',
        vnp_OrderInfo: 'Thanh toan don hang 12345',
        vnp_OrderType: ProductCode.Other,
        vnp_ReturnUrl: 'http://localhost:3000/vnpay-return',
        vnp_Locale: VnpLocale.VN,
      });

      return paymentUrl
    } catch (error) {

    }
  }

  @Public()
  @common.Get("/vnpay-ipn")
  async very(@common.Req() req: any) {
    try {
      const verify: VerifyReturnUrl = await this.vnpayService.verifyIpnCall(req.query);
      const { vnp_BankCode, vnp_BankTranNo, isSuccess, vnp_TxnRef, vnp_Amount } = verify
      if (!isSuccess) {
        return {
          message: "Giao dịch thất bại"
        }
      }

      return await this.service.verify(vnp_TxnRef, Number(vnp_Amount), vnp_BankCode, vnp_BankTranNo);
      // return res.json(IpnSuccess);
    } catch (error) {
      /**
       * Xử lí lỗi ngoại lệ
       * Ví dụ như không đủ dữ liệu, dữ liệu không hợp lệ, cập nhật database thất bại
       */
      console.log(`verify error: ${error}`);
      // return res.json(IpnUnknownError);
    }
  }

  @common.Get("/getAll")
  async getAll(){
    try {
      return this.service.donations({
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
      });
    } catch (error) {
      throw error
    }
  }   

  
}
