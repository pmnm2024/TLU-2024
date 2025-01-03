/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { HistorySendMailService } from "../historySendMail.service";
import { HistorySendMailCreateInput } from "./HistorySendMailCreateInput";
import { HistorySendMail } from "./HistorySendMail";
import { HistorySendMailFindManyArgs } from "./HistorySendMailFindManyArgs";
import { HistorySendMailWhereUniqueInput } from "./HistorySendMailWhereUniqueInput";
import { HistorySendMailUpdateInput } from "./HistorySendMailUpdateInput";

export class HistorySendMailControllerBase {
  constructor(protected readonly service: HistorySendMailService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: HistorySendMail })
  async createHistorySendMail(
    @common.Body() data: HistorySendMailCreateInput
  ): Promise<HistorySendMail> {
    return await this.service.createHistorySendMail({
      data: data,
      select: {
        body: true,
        createdAt: true,
        email: true,
        id: true,
        sentAt: true,
        status: true,
        subject: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [HistorySendMail] })
  @ApiNestedQuery(HistorySendMailFindManyArgs)
  async historySendMails(
    @common.Req() request: Request
  ): Promise<HistorySendMail[]> {
    const args = plainToClass(HistorySendMailFindManyArgs, request.query);
    return this.service.historySendMails({
      ...args,
      select: {
        body: true,
        createdAt: true,
        email: true,
        id: true,
        sentAt: true,
        status: true,
        subject: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: HistorySendMail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async historySendMail(
    @common.Param() params: HistorySendMailWhereUniqueInput
  ): Promise<HistorySendMail | null> {
    const result = await this.service.historySendMail({
      where: params,
      select: {
        body: true,
        createdAt: true,
        email: true,
        id: true,
        sentAt: true,
        status: true,
        subject: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: HistorySendMail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHistorySendMail(
    @common.Param() params: HistorySendMailWhereUniqueInput,
    @common.Body() data: HistorySendMailUpdateInput
  ): Promise<HistorySendMail | null> {
    try {
      return await this.service.updateHistorySendMail({
        where: params,
        data: data,
        select: {
          body: true,
          createdAt: true,
          email: true,
          id: true,
          sentAt: true,
          status: true,
          subject: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: HistorySendMail })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHistorySendMail(
    @common.Param() params: HistorySendMailWhereUniqueInput
  ): Promise<HistorySendMail | null> {
    try {
      return await this.service.deleteHistorySendMail({
        where: params,
        select: {
          body: true,
          createdAt: true,
          email: true,
          id: true,
          sentAt: true,
          status: true,
          subject: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
