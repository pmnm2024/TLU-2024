/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module } from "@nestjs/common";
import { SupportRequestDetailModuleBase } from "./base/supportRequestDetail.module.base";
import { SupportRequestDetailService } from "./supportRequestDetail.service";
import { SupportRequestDetailController } from "./supportRequestDetail.controller";

@Module({
  imports: [SupportRequestDetailModuleBase],
  controllers: [SupportRequestDetailController],
  providers: [SupportRequestDetailService],
  exports: [SupportRequestDetailService],
})
export class SupportRequestDetailModule {}
