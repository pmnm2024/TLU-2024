import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HistorySupportService } from "./historySupport.service";
import { HistorySupportControllerBase } from "./base/historySupport.controller.base";

@swagger.ApiTags("historySupports")
@common.Controller("historySupports")
export class HistorySupportController extends HistorySupportControllerBase {
  constructor(
    protected readonly service: HistorySupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
