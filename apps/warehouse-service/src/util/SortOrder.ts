/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { registerEnumType } from "@nestjs/graphql";

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}
registerEnumType(SortOrder, {
  name: "SortOrder",
  description: undefined,
});
