import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DistrictService } from "./district.service";
import { DistrictControllerBase } from "./base/district.controller.base";

@swagger.ApiTags("districts")
@common.Controller("districts")
export class DistrictController extends DistrictControllerBase {
  constructor(protected readonly service: DistrictService) {
    super(service);
  }
}
