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
import { AdministrativeUnitWhereUniqueInput } from "../../administrativeUnit/base/AdministrativeUnitWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { DistrictWhereUniqueInput } from "../../district/base/DistrictWhereUniqueInput";

@InputType()
class WardCreateInput {
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
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  code!: string;

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
    type: () => DistrictWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DistrictWhereUniqueInput)
  @IsOptional()
  @Field(() => DistrictWhereUniqueInput, {
    nullable: true,
  })
  district?: DistrictWhereUniqueInput | null;

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
  fullName?: string | null;

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
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  name!: string;

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

export { WardCreateInput as WardCreateInput };
