import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { Public } from "src/decorators/public.decorator";
import { UserCreateInput } from "./base/UserCreateInput";
import { User } from "./base/User";

@swagger.ApiTags("users")
@common.Controller("users")
export class UserController extends UserControllerBase {
  constructor(
    protected readonly service: UserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }


  @Public()
  @common.Post("/register")
  async register(@common.Body() data: UserCreateInput): Promise<User> {
    try {
      const payLoad = {
        data: data,
        select: {
          address: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          roles: true,
          sex: true,
          updatedAt: true,
          username: true,
        },
      }

      return await this.service.createUser(payLoad)
    } catch (error) {
      throw error
    }
  }

  @Public()
  @common.Post("/forgot-password")
  async forgotPassword(@common.Body("email") email: string) {
    try {
      const result = await this.service.resetPassword(email)
      return result
    } catch (error) {
      throw error
    }
  }
}
