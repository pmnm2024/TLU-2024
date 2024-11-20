import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ReliefItemService } from "./reliefItem.service";
import { ReliefItemControllerBase } from "./base/reliefItem.controller.base";

@swagger.ApiTags("reliefItems")
@common.Controller("reliefItems")
export class ReliefItemController extends ReliefItemControllerBase {
  constructor(protected readonly service: ReliefItemService) {
    super(service);
  }
}
