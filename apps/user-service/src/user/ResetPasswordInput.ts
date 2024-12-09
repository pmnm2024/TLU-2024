/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ResetPasswordInput {
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    email!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    oldPassword!: string;

    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    newPassword!: string;
}

export { ResetPasswordInput as ResetPasswordInput };