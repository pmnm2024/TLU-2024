/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupportRequestTypeService } from "./supportRequestType.service";
import { SupportRequestTypeControllerBase } from "./base/supportRequestType.controller.base";

@swagger.ApiTags("supportRequestTypes")
@common.Controller("supportRequestTypes")
export class SupportRequestTypeController extends SupportRequestTypeControllerBase {
  constructor(protected readonly service: SupportRequestTypeService) {
    super(service);
  }
}
