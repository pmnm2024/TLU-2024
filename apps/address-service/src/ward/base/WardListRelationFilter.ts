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
import { WardWhereInput } from "./WardWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WardListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WardWhereInput,
  })
  @ValidateNested()
  @Type(() => WardWhereInput)
  @IsOptional()
  @Field(() => WardWhereInput, {
    nullable: true,
  })
  every?: WardWhereInput;

  @ApiProperty({
    required: false,
    type: () => WardWhereInput,
  })
  @ValidateNested()
  @Type(() => WardWhereInput)
  @IsOptional()
  @Field(() => WardWhereInput, {
    nullable: true,
  })
  some?: WardWhereInput;

  @ApiProperty({
    required: false,
    type: () => WardWhereInput,
  })
  @ValidateNested()
  @Type(() => WardWhereInput)
  @IsOptional()
  @Field(() => WardWhereInput, {
    nullable: true,
  })
  none?: WardWhereInput;
}
export { WardListRelationFilter as WardListRelationFilter };
