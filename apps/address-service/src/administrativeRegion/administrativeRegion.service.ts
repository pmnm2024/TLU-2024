import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdministrativeRegionServiceBase } from "./base/administrativeRegion.service.base";

@Injectable()
export class AdministrativeRegionService extends AdministrativeRegionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
