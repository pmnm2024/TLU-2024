/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ACGuard } from "nest-access-control";

export class GqlACGuard<User extends any = any> extends ACGuard<User> {
  async getUser(context: ExecutionContext): Promise<User> {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext<{ req: { user: User } }>().req;
    return request.user;
  }
}
