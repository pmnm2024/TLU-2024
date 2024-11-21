import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdministrativeUnitService } from "./administrativeUnit.service";
import { AdministrativeUnitControllerBase } from "./base/administrativeUnit.controller.base";

@swagger.ApiTags("administrativeUnits")
@common.Controller("administrativeUnits")
export class AdministrativeUnitController extends AdministrativeUnitControllerBase {
  constructor(protected readonly service: AdministrativeUnitService) {
    super(service);
  }
}
