/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserService } from "./user.service";
import { UserControllerBase } from "./base/user.controller.base";
import { Public } from "src/decorators/public.decorator";
import { UserCreateInput } from "./base/UserCreateInput";
import { User } from "./base/User";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { EventPattern, Payload } from "@nestjs/microservices";
import { RabbitMQMessage } from "src/rabbitmq/RabbitMQMessage";
import * as errors from "../errors";
import { isRecordNotFoundError } from "src/prisma.util";
import { UserWhereUniqueInput } from "./base/UserWhereUniqueInput";
import { UserUpdateInput } from "./base/UserUpdateInput";

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
        data: {
          ...data,
          roles: data.roles ? data.roles : ["user"],
          rank: data.rank
            ? {
              connect: data.rank,
            }
            : undefined,
        },
        select: {
          address: true,
          createdAt: true,
          email: true,
          fcmToken: true,
          firstName: true,
          id: true,
          lastName: true,
          nowLocation: true,
          phone: true,
          rank: {
            select: {
              id: true,
            },
          },

          roles: true,
          score: true,
          sex: true,
          status: true,
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
      const result = await this.service.forgotPassword(email)
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


  // @Public()
  @common.Post("/reset-password")
  async resetPassword(@common.Request() req: any, @common.Body("passwordNew") passwordNew: string) {
    try {
      const user = JSON.parse(req.headers.user);
      const result = await this.service.resetPassword(user.sub, passwordNew)
      return {
        message: "Reset password successfull"
      }
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

  @EventPattern(MyMessageBrokerTopics.AddSupportRequest)
  async onAddSupportRequest(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {
    try {
      const { data } = message as any;
      await this.service.recentUsers(data);
      return;
    } catch (error) {
      throw error;
    }
  }

  @Public()
  @common.Get("/userDetail")
  async userDetail(@common.Request() req: any) {
    const user = JSON.parse(req.headers.user);
    const result = await this.service.user({
      where: { id: user.sub },
      select: {
        address: true,
        createdAt: true,
        email: true,
        fcmToken: true,
        firstName: true,
        id: true,
        lastName: true,
        nowLocation: true,
        phone: true,
        rank: {
          select: {
            id: true,
          },
        },

        roles: true,
        score: true,
        sex: true,
        status: true,
        updatedAt: true,
        username: true,
      },
    });

    if (!result) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(req.headers.user.sub)}`
      );
    }

    return result;
  }

  @Public()
  @common.Post("/nowLocation")
  async nowLocation(
    @common.Request() req: any,
    @common.Body() { lat, long }: { lat: number; long: number }
  ) {

    if (!lat || !long) {
      throw new Error("Latitude and longitude are required.");
    }
    const user = JSON.parse(req.headers.user);
    try {
      return await this.service.updateUser({
        where: { id: user.sub },
        data: {
          nowLocation: {
            type: "Point",
            coordinates: [long, lat],
          },
        },
        select: {
          address: true,
          createdAt: true,
          email: true,
          fcmToken: true,
          firstName: true,
          id: true,
          lastName: true,
          nowLocation: true,
          phone: true,
          rank: {
            select: {
              id: true,
            },
          },

          roles: true,
          score: true,
          sex: true,
          status: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(user.sub)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Post('/editUser')
  async editUser(
    @common.Request() req: any,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    const user = JSON.parse(req.headers.user);
    try {
      return await this.service.updateUser({
        where: { id: user.sub },
        data: {
          ...data,

          rank: data.rank
            ? {
              connect: data.rank,
            }
            : undefined,
        },
        select: {
          address: true,
          createdAt: true,
          email: true,
          fcmToken: true,
          firstName: true,
          id: true,
          lastName: true,
          nowLocation: true,
          phone: true,
          rank: {
            select: {
              id: true,
            },
          },
          roles: true,
          score: true,
          sex: true,
          status: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(user.sub)}`
        );
      }
      throw error;
    }
  }

  @Public()
  @common.Post("/pushNoti")
  async getAdmin(@common.Body("phone") phone: string ) {
    try {
      return this.service.pushNoti(phone);
    } catch (error) {
      throw error;
    }
  }

  @common.Post("/reset-password-v2")
  async resetPasswordV2(@common.Request() req: any, @common.Body("passwordNew") passwordNew: string, @common.Body("passwordOld") passwordOld: string) {
    try {
      const user = JSON.parse(req.headers.user);
      await this.service.changePassword(user.sub, passwordNew, passwordOld)
      return {
        message: "Reset password successfull"
      }
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
