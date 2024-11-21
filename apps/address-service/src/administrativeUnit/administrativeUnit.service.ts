import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdministrativeUnitServiceBase } from "./base/administrativeUnit.service.base";

@Injectable()
export class AdministrativeUnitService extends AdministrativeUnitServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
