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
import { SupportRequestCreateInput } from "./SupportRequestCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateSupportRequestArgs {
  @ApiProperty({
    required: true,
    type: () => SupportRequestCreateInput,
  })
  @ValidateNested()
  @Type(() => SupportRequestCreateInput)
  @Field(() => SupportRequestCreateInput, { nullable: false })
  data!: SupportRequestCreateInput;
}

export { CreateSupportRequestArgs as CreateSupportRequestArgs };
