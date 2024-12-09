/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module } from "@nestjs/common";
import { SupportRequestModuleBase } from "./base/supportRequest.module.base";
import { SupportRequestService } from "./supportRequest.service";
import { SupportRequestController } from "./supportRequest.controller";

@Module({
  imports: [SupportRequestModuleBase],
  controllers: [SupportRequestController],
  providers: [SupportRequestService],
  exports: [SupportRequestService],
})
export class SupportRequestModule {}
