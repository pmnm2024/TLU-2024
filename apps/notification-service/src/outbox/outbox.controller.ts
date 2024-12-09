/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutboxService } from "./outbox.service";
import { OutboxControllerBase } from "./base/outbox.controller.base";

@swagger.ApiTags("outboxes")
@common.Controller("outboxes")
export class OutboxController extends OutboxControllerBase {
  constructor(protected readonly service: OutboxService) {
    super(service);
  }
}
