/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType({
  isAbstract: true,
  description: undefined,
})
export class BooleanNullableFilter {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  equals?: boolean | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  not?: boolean | null;
}
