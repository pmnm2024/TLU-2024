/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RankUserService } from "./rankUser.service";
import { RankUserControllerBase } from "./base/rankUser.controller.base";

@swagger.ApiTags("rankUsers")
@common.Controller("rankUsers")
export class RankUserController extends RankUserControllerBase {
  constructor(
    protected readonly service: RankUserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
