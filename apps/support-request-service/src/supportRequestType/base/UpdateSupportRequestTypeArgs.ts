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
import { SupportRequestTypeWhereUniqueInput } from "./SupportRequestTypeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { SupportRequestTypeUpdateInput } from "./SupportRequestTypeUpdateInput";

@ArgsType()
class UpdateSupportRequestTypeArgs {
  @ApiProperty({
    required: true,
    type: () => SupportRequestTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupportRequestTypeWhereUniqueInput)
  @Field(() => SupportRequestTypeWhereUniqueInput, { nullable: false })
  where!: SupportRequestTypeWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => SupportRequestTypeUpdateInput,
  })
  @ValidateNested()
  @Type(() => SupportRequestTypeUpdateInput)
  @Field(() => SupportRequestTypeUpdateInput, { nullable: false })
  data!: SupportRequestTypeUpdateInput;
}

export { UpdateSupportRequestTypeArgs as UpdateSupportRequestTypeArgs };
