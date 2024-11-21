/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdministrativeRegionWhereUniqueInput } from "../../administrativeRegion/base/AdministrativeRegionWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { AdministrativeUnitWhereUniqueInput } from "../../administrativeUnit/base/AdministrativeUnitWhereUniqueInput";
import { DistrictUpdateManyWithoutProvincesInput } from "./DistrictUpdateManyWithoutProvincesInput";

@InputType()
class ProvinceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AdministrativeRegionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdministrativeRegionWhereUniqueInput)
  @IsOptional()
  @Field(() => AdministrativeRegionWhereUniqueInput, {
    nullable: true,
  })
  administrativeRegion?: AdministrativeRegionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => AdministrativeUnitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdministrativeUnitWhereUniqueInput)
  @IsOptional()
  @Field(() => AdministrativeUnitWhereUniqueInput, {
    nullable: true,
  })
  administrativeUnit?: AdministrativeUnitWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  codeName?: string | null;

  @ApiProperty({
    required: false,
    type: () => DistrictUpdateManyWithoutProvincesInput,
  })
  @ValidateNested()
  @Type(() => DistrictUpdateManyWithoutProvincesInput)
  @IsOptional()
  @Field(() => DistrictUpdateManyWithoutProvincesInput, {
    nullable: true,
  })
  districts?: DistrictUpdateManyWithoutProvincesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fullName?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fullNameEn?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nameEn?: string | null;
}

export { ProvinceUpdateInput as ProvinceUpdateInput };
