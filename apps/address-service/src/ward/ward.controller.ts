import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WardService } from "./ward.service";
import { WardControllerBase } from "./base/ward.controller.base";

@swagger.ApiTags("wards")
@common.Controller("wards")
export class WardController extends WardControllerBase {
  constructor(protected readonly service: WardService) {
    super(service);
  }
}
