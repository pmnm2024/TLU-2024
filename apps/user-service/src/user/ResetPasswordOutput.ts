/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class ResetPasswordOutput {
    @ApiProperty({
        required: true,
        type: () => Boolean
    })
    @Type(() => Boolean)
    success!: boolean;

    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    message?: string;
}

export { ResetPasswordOutput as ResetPasswordOutput };