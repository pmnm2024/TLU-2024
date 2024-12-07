import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SupportRequestService } from "./supportRequest.service";
import { SupportRequestControllerBase } from "./base/supportRequest.controller.base";
import { Public } from "src/decorators/public.decorator";
@swagger.ApiTags("supportRequests")
@common.Controller("supportRequests")
export class SupportRequestController extends SupportRequestControllerBase {
  constructor(protected readonly service: SupportRequestService) {
    super(service);
  }

  @Public()
  @common.Post("/handleSupportRequest")
  async handleSupportRequest(@common.Body("warehouse") warehouse: any[],@common.Body("id") id: string,@common.Body("status") status: string) {
    try {
      const result = await this.service.handleSupportRequest(id,status,warehouse)
      return result
    } catch (error: any) {
      throw new common.HttpException(
        {
          status: error.status,
          error: error.message,
        },
        error.status || common.HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
