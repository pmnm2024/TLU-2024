import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdministrativeRegionService } from "./administrativeRegion.service";
import { AdministrativeRegionControllerBase } from "./base/administrativeRegion.controller.base";

@swagger.ApiTags("administrativeRegions")
@common.Controller("administrativeRegions")
export class AdministrativeRegionController extends AdministrativeRegionControllerBase {
  constructor(protected readonly service: AdministrativeRegionService) {
    super(service);
  }
}
