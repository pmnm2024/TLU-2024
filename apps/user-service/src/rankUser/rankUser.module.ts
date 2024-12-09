/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RankUserModuleBase } from "./base/rankUser.module.base";
import { RankUserService } from "./rankUser.service";
import { RankUserController } from "./rankUser.controller";

@Module({
  imports: [RankUserModuleBase, forwardRef(() => AuthModule)],
  controllers: [RankUserController],
  providers: [RankUserService],
  exports: [RankUserService],
})
export class RankUserModule {}
