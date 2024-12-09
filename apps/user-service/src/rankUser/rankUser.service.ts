/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RankUserServiceBase } from "./base/rankUser.service.base";

@Injectable()
export class RankUserService extends RankUserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
