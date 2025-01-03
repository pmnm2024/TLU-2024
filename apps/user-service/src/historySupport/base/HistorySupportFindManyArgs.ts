/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HistorySupportWhereInput } from "./HistorySupportWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HistorySupportOrderByInput } from "./HistorySupportOrderByInput";

@ArgsType()
class HistorySupportFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HistorySupportWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HistorySupportWhereInput, { nullable: true })
  @Type(() => HistorySupportWhereInput)
  where?: HistorySupportWhereInput;

  @ApiProperty({
    required: false,
    type: [HistorySupportOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HistorySupportOrderByInput], { nullable: true })
  @Type(() => HistorySupportOrderByInput)
  orderBy?: Array<HistorySupportOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HistorySupportFindManyArgs as HistorySupportFindManyArgs };
