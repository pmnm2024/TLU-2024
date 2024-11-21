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
import {
  IsInt,
  Min,
  Max,
  IsString,
  MaxLength,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { SupportRequestCreateNestedManyWithoutSupportRequestDetailsInput } from "./SupportRequestCreateNestedManyWithoutSupportRequestDetailsInput";
import { Type } from "class-transformer";

@InputType()
class SupportRequestDetailCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @Field(() => Number)
  quantity!: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  reliefItemId!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  reliefItemName!: string;

  @ApiProperty({
    required: false,
    type: () => SupportRequestCreateNestedManyWithoutSupportRequestDetailsInput,
  })
  @ValidateNested()
  @Type(() => SupportRequestCreateNestedManyWithoutSupportRequestDetailsInput)
  @IsOptional()
  @Field(
    () => SupportRequestCreateNestedManyWithoutSupportRequestDetailsInput,
    {
      nullable: true,
    }
  )
  supportRequestId?: SupportRequestCreateNestedManyWithoutSupportRequestDetailsInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  unit!: string;
}

export { SupportRequestDetailCreateInput as SupportRequestDetailCreateInput };
