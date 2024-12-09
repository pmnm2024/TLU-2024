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
import e from "express";
@swagger.ApiTags("donations")
@common.Controller("donations")
export class DonationController extends DonationControllerBase {
  constructor(protected readonly service: DonationService) {
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
  async getDonationByUserId( @common.Request() req: any,): Promise<Donation | null> {
    const user = JSON.parse(req.headers.user);
    return this.service.donation({
      where: {id: user.sub},
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
