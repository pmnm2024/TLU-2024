/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType()
class MetaQueryPayload {
  @ApiProperty({
    required: true,
    type: [Number],
  })
  @Field(() => Number)
  count!: number;
}
export { MetaQueryPayload };
