/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HealthServiceBase } from "./base/health.service.base";

@Injectable()
export class HealthService extends HealthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
