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
import { SupportRequestDetailWhereUniqueInput } from "./SupportRequestDetailWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SupportRequestDetailUpdateInput } from "./SupportRequestDetailUpdateInput";

@ArgsType()
class UpdateSupportRequestDetailArgs {
  @ApiProperty({
    required: true,
    type: () => SupportRequestDetailWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupportRequestDetailWhereUniqueInput)
  @Field(() => SupportRequestDetailWhereUniqueInput, { nullable: false })
  where!: SupportRequestDetailWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SupportRequestDetailUpdateInput,
  })
  @ValidateNested()
  @Type(() => SupportRequestDetailUpdateInput)
  @Field(() => SupportRequestDetailUpdateInput, { nullable: false })
  data!: SupportRequestDetailUpdateInput;
}

export { UpdateSupportRequestDetailArgs as UpdateSupportRequestDetailArgs };