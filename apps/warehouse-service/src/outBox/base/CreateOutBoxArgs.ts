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
import { OutBoxCreateInput } from "./OutBoxCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOutBoxArgs {
  @ApiProperty({
    required: true,
    type: () => OutBoxCreateInput,
  })
  @ValidateNested()
  @Type(() => OutBoxCreateInput)
  @Field(() => OutBoxCreateInput, { nullable: false })
  data!: OutBoxCreateInput;
}

export { CreateOutBoxArgs as CreateOutBoxArgs };
