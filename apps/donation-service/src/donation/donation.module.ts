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
import { VnpayModule } from "nestjs-vnpay";
import { HashAlgorithm } from "vnpay";

@Module({
  imports: [DonationModuleBase,
    VnpayModule.register({
      tmnCode: 'QNZ5WKJK',
      secureSecret: 'WJ65OFRVFTLCGBU22P3KK3RXLNKWRT0D',
      vnpayHost: 'https://sandbox.vnpayment.vn',
      testMode: true, // tùy chọn, ghi đè vnpayHost thành sandbox nếu là true
      hashAlgorithm: HashAlgorithm.SHA512, // tùy chọn

      /**
       * Sử dụng enableLog để bật/tắt logger
       * Nếu enableLog là false, loggerFn sẽ không được sử dụng trong bất kỳ phương thức nào
       */
      enableLog: true, // tùy chọn

    }),
  ],
  controllers: [DonationController],
  providers: [DonationService],
  exports: [DonationService],
})
export class DonationModule { }
