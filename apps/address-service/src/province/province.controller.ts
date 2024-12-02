import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProvinceService } from "./province.service";
import { ProvinceControllerBase } from "./base/province.controller.base";

@swagger.ApiTags("provinces")
@common.Controller("provinces")
export class ProvinceController extends ProvinceControllerBase {
  constructor(protected readonly service: ProvinceService) {
    super(service);
  }
}
