/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module } from "@nestjs/common";
import { DonationModuleBase } from "./base/donation.module.base";
import { DonationService } from "./donation.service";
import { DonationController } from "./donation.controller";

@Module({
  imports: [DonationModuleBase],
  controllers: [DonationController],
  providers: [DonationService],
  exports: [DonationService],
})
export class DonationModule {}
