import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { OutBoxService } from "./outBox.service";
import { OutBoxControllerBase } from "./base/outBox.controller.base";
import { Public } from "src/decorators/public.decorator";
import { plainToClass } from "class-transformer";
import { OutBoxFindManyArgs } from "./base/OutBoxFindManyArgs";
import { Request } from "express";

@swagger.ApiTags("outBoxes")
@common.Controller("outBoxes")
export class OutBoxController extends OutBoxControllerBase {
  constructor(
    protected readonly service: OutBoxService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @Public()
  @common.Get()
  async getOutbox(@common.Req() request: Request){
    return super.outBoxes(request)
  }
}
