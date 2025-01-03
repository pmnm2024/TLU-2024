/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutBoxService } from "./outBox.service";
import { OutBoxControllerBase } from "./base/outBox.controller.base";

@swagger.ApiTags("outBoxes")
@common.Controller("outBoxes")
export class OutBoxController extends OutBoxControllerBase {
  constructor(protected readonly service: OutBoxService) {
    super(service);
  }
}
