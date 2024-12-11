import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FcmService } from "./fcm.service";
import { FcmControllerBase } from "./base/fcm.controller.base";

@swagger.ApiTags("fcms")
@common.Controller("fcms")
export class FcmController extends FcmControllerBase {
  constructor(protected readonly service: FcmService) {
    super(service);
  }

  @common.Get("/byUser")
  async getByuser(@common.Req() req: any) {
    try {
      const user = JSON.parse(req.headers.user);

      if (!user) throw new common.UnauthorizedException()
      const result = await this.service.getByUser(user.sub)
      return result
    } catch (error) {
      throw error
    }
  }
}
