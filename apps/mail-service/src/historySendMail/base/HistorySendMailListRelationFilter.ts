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
import { HistorySendMailWhereInput } from "./HistorySendMailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class HistorySendMailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => HistorySendMailWhereInput,
  })
  @ValidateNested()
  @Type(() => HistorySendMailWhereInput)
  @IsOptional()
  @Field(() => HistorySendMailWhereInput, {
    nullable: true,
  })
  every?: HistorySendMailWhereInput;

  @ApiProperty({
    required: false,
    type: () => HistorySendMailWhereInput,
  })
  @ValidateNested()
  @Type(() => HistorySendMailWhereInput)
  @IsOptional()
  @Field(() => HistorySendMailWhereInput, {
    nullable: true,
  })
  some?: HistorySendMailWhereInput;

  @ApiProperty({
    required: false,
    type: () => HistorySendMailWhereInput,
  })
  @ValidateNested()
  @Type(() => HistorySendMailWhereInput)
  @IsOptional()
  @Field(() => HistorySendMailWhereInput, {
    nullable: true,
  })
  none?: HistorySendMailWhereInput;
}
export { HistorySendMailListRelationFilter as HistorySendMailListRelationFilter };
