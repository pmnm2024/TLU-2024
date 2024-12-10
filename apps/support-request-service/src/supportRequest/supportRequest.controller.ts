/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupportRequestService } from "./supportRequest.service";
import { SupportRequestControllerBase } from "./base/supportRequest.controller.base";
import { Public } from "src/decorators/public.decorator";
import { SupportRequest } from "./base/SupportRequest";
import { SupportRequestCreateInput } from "./base/SupportRequestCreateInput";
@swagger.ApiTags("supportRequests")
@common.Controller("supportRequests")
export class SupportRequestController extends SupportRequestControllerBase {
  constructor(protected readonly service: SupportRequestService) {
    super(service);
  }

  @Public()
  @common.Post("/handleSupportRequest")
  async handleSupportRequest(@common.Body() data: any) {

    try {
      const result = await this.service.handleSupportRequest(data)
      return result
    } catch (error: any) {
      throw new common.HttpException(
        {
          status: error.status,
          error: error.message,
        },
        error.status || common.HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @common.Post("/addSupportRequest")
  @swagger.ApiCreatedResponse({ type: SupportRequest })
  async addSupportRequest(
    @common.Body() data: SupportRequestCreateInput
  ): Promise<SupportRequest> {
    try {
      return await this.service.addSupportRequest({
        data: data,
        select: {
          city: true,
          createdAt: true,
          descripton: true,
          detailAddress: true,
          district: true,
          email: true,
          fullname: true,
          id: true,
          location: true,
          phone: true,
          point: true,
          quantity: true,
          status: true,
          supportRequestTypeId: true,
          updatedAt: true,
          ward: true,
        },
      });
    } catch (error) {
      throw error
    }
  }



  @common.Get("/getSupportRequestByUserId")
  @swagger.ApiOkResponse({ type: [SupportRequest] })
  async getSupportRequestByUserId(@common.Request() req: any,): Promise<SupportRequest | null> {
    const user = JSON.parse(req.headers.user);
    return this.service.supportRequest({
      where: { id: user.sub },
      select: {
        city: true,
        createdAt: true,
        descripton: true,
        detailAddress: true,
        district: true,
        email: true,
        fullname: true,
        id: true,
        location: true,
        phone: true,
        point: true,
        quantity: true,
        status: true,
        supportRequestTypeId: true,
        updatedAt: true,
        ward: true,
      },
    });
  }
}
