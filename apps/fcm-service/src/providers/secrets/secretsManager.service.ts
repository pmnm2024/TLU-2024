/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { SecretsManagerServiceBase } from "./base/secretsManager.service.base";

@Injectable()
export class SecretsManagerService extends SecretsManagerServiceBase {
  constructor(protected readonly configService: ConfigService) {
    super(configService);
  }
}
