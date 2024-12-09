/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import type { JsonValue } from "type-fest";

export type InputJsonValue = Omit<JsonValue, "null">;
