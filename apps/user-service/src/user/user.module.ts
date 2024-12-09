/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TokenService } from "src/auth/token.service";
import { JwtService } from "@nestjs/jwt";
@Module({
  imports: [UserModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService, TokenService, JwtService],
  exports: [UserService],
})
export class UserModule { }

