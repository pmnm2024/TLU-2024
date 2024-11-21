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
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DistrictWhereUniqueInput } from "../../district/base/DistrictWhereUniqueInput";

@InputType()
class WardWhereInput {
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
  administrativeUnit?: AdministrativeUnitWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  code?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  codeName?: StringNullableFilter;

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
  district?: DistrictWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fullName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  fullNameEn?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nameEn?: StringNullableFilter;
}

export { WardWhereInput as WardWhereInput };
