/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupportRequestDetailService } from "./supportRequestDetail.service";
import { SupportRequestDetailControllerBase } from "./base/supportRequestDetail.controller.base";
import { SupportRequestDetail } from "./base/SupportRequestDetail";

@swagger.ApiTags("supportRequestDetails")
@common.Controller("supportRequestDetails")
export class SupportRequestDetailController extends SupportRequestDetailControllerBase {
  constructor(protected readonly service: SupportRequestDetailService) {
    super(service);
  }

  @common.Get("/getDetail/:id")
  @swagger.ApiOkResponse({ type: [SupportRequestDetail] })
  async getDetail(@common.Param('id') id : string): Promise<SupportRequestDetail[]> {
    return this.service.supportRequestDetails({
      where: {supportRequestID: id},
      select: {
        createdAt: true,
        id: true,
        quantity: true,
        supportRequestID: true,
        unit: true,
        updatedAt: true,
        wareHouseId: true,
        wareHouseName: true,
      },
    });
  }
}
