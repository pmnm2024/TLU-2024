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

@swagger.ApiTags("supportRequestDetails")
@common.Controller("supportRequestDetails")
export class SupportRequestDetailController extends SupportRequestDetailControllerBase {
  constructor(protected readonly service: SupportRequestDetailService) {
    super(service);
  }
}
