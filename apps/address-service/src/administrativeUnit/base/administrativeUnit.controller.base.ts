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
import { AdministrativeUnitService } from "../administrativeUnit.service";
import { AdministrativeUnitCreateInput } from "./AdministrativeUnitCreateInput";
import { AdministrativeUnit } from "./AdministrativeUnit";
import { AdministrativeUnitFindManyArgs } from "./AdministrativeUnitFindManyArgs";
import { AdministrativeUnitWhereUniqueInput } from "./AdministrativeUnitWhereUniqueInput";
import { AdministrativeUnitUpdateInput } from "./AdministrativeUnitUpdateInput";
import { DistrictFindManyArgs } from "../../district/base/DistrictFindManyArgs";
import { District } from "../../district/base/District";
import { DistrictWhereUniqueInput } from "../../district/base/DistrictWhereUniqueInput";
import { ProvinceFindManyArgs } from "../../province/base/ProvinceFindManyArgs";
import { Province } from "../../province/base/Province";
import { ProvinceWhereUniqueInput } from "../../province/base/ProvinceWhereUniqueInput";
import { WardFindManyArgs } from "../../ward/base/WardFindManyArgs";
import { Ward } from "../../ward/base/Ward";
import { WardWhereUniqueInput } from "../../ward/base/WardWhereUniqueInput";

export class AdministrativeUnitControllerBase {
  constructor(protected readonly service: AdministrativeUnitService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AdministrativeUnit })
  async createAdministrativeUnit(
    @common.Body() data: AdministrativeUnitCreateInput
  ): Promise<AdministrativeUnit> {
    return await this.service.createAdministrativeUnit({
      data: data,
      select: {
        codeName: true,
        codeNameEn: true,
        fullName: true,
        fullNameEn: true,
        id: true,
        shortName: true,
        shortNameEn: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AdministrativeUnit] })
  @ApiNestedQuery(AdministrativeUnitFindManyArgs)
  async administrativeUnits(
    @common.Req() request: Request
  ): Promise<AdministrativeUnit[]> {
    const args = plainToClass(AdministrativeUnitFindManyArgs, request.query);
    return this.service.administrativeUnits({
      ...args,
      select: {
        codeName: true,
        codeNameEn: true,
        fullName: true,
        fullNameEn: true,
        id: true,
        shortName: true,
        shortNameEn: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AdministrativeUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async administrativeUnit(
    @common.Param() params: AdministrativeUnitWhereUniqueInput
  ): Promise<AdministrativeUnit | null> {
    const result = await this.service.administrativeUnit({
      where: params,
      select: {
        codeName: true,
        codeNameEn: true,
        fullName: true,
        fullNameEn: true,
        id: true,
        shortName: true,
        shortNameEn: true,
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
  @swagger.ApiOkResponse({ type: AdministrativeUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAdministrativeUnit(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() data: AdministrativeUnitUpdateInput
  ): Promise<AdministrativeUnit | null> {
    try {
      return await this.service.updateAdministrativeUnit({
        where: params,
        data: data,
        select: {
          codeName: true,
          codeNameEn: true,
          fullName: true,
          fullNameEn: true,
          id: true,
          shortName: true,
          shortNameEn: true,
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
  @swagger.ApiOkResponse({ type: AdministrativeUnit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAdministrativeUnit(
    @common.Param() params: AdministrativeUnitWhereUniqueInput
  ): Promise<AdministrativeUnit | null> {
    try {
      return await this.service.deleteAdministrativeUnit({
        where: params,
        select: {
          codeName: true,
          codeNameEn: true,
          fullName: true,
          fullNameEn: true,
          id: true,
          shortName: true,
          shortNameEn: true,
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

  @common.Get("/:id/districts")
  @ApiNestedQuery(DistrictFindManyArgs)
  async findDistricts(
    @common.Req() request: Request,
    @common.Param() params: AdministrativeUnitWhereUniqueInput
  ): Promise<District[]> {
    const query = plainToClass(DistrictFindManyArgs, request.query);
    const results = await this.service.findDistricts(params.id, {
      ...query,
      select: {
        administrativeUnit: {
          select: {
            id: true,
          },
        },

        code: true,
        codeName: true,
        fullName: true,
        fullNameEn: true,
        id: true,
        name: true,
        nameEn: true,

        province: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/districts")
  async connectDistricts(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: DistrictWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      districts: {
        connect: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/districts")
  async updateDistricts(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: DistrictWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      districts: {
        set: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/districts")
  async disconnectDistricts(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: DistrictWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      districts: {
        disconnect: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/provinces")
  @ApiNestedQuery(ProvinceFindManyArgs)
  async findProvinces(
    @common.Req() request: Request,
    @common.Param() params: AdministrativeUnitWhereUniqueInput
  ): Promise<Province[]> {
    const query = plainToClass(ProvinceFindManyArgs, request.query);
    const results = await this.service.findProvinces(params.id, {
      ...query,
      select: {
        administrativeRegion: {
          select: {
            id: true,
          },
        },

        administrativeUnit: {
          select: {
            id: true,
          },
        },

        code: true,
        codeName: true,
        fullName: true,
        fullNameEn: true,
        id: true,
        name: true,
        nameEn: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/provinces")
  async connectProvinces(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: ProvinceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      provinces: {
        connect: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/provinces")
  async updateProvinces(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: ProvinceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      provinces: {
        set: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/provinces")
  async disconnectProvinces(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: ProvinceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      provinces: {
        disconnect: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/wards")
  @ApiNestedQuery(WardFindManyArgs)
  async findWards(
    @common.Req() request: Request,
    @common.Param() params: AdministrativeUnitWhereUniqueInput
  ): Promise<Ward[]> {
    const query = plainToClass(WardFindManyArgs, request.query);
    const results = await this.service.findWards(params.id, {
      ...query,
      select: {
        administrativeUnit: {
          select: {
            id: true,
          },
        },

        code: true,
        codeName: true,

        district: {
          select: {
            id: true,
          },
        },

        fullName: true,
        fullNameEn: true,
        id: true,
        name: true,
        nameEn: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wards")
  async connectWards(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: WardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wards: {
        connect: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wards")
  async updateWards(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: WardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wards: {
        set: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wards")
  async disconnectWards(
    @common.Param() params: AdministrativeUnitWhereUniqueInput,
    @common.Body() body: WardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wards: {
        disconnect: body,
      },
    };
    await this.service.updateAdministrativeUnit({
      where: params,
      data,
      select: { id: true },
    });
  }
}
