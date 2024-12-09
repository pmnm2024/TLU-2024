/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OutBoxModuleBase } from "./base/outBox.module.base";
import { OutBoxService } from "./outBox.service";
import { OutBoxController } from "./outBox.controller";

@Module({
  imports: [OutBoxModuleBase, forwardRef(() => AuthModule)],
  controllers: [OutBoxController],
  providers: [OutBoxService],
  exports: [OutBoxService],
})
export class OutBoxModule {}
