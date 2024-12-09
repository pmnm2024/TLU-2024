/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export interface ITokenPayload {
  id: string;
  username: string;
  password: string;
  jti: string;
}

export interface ITokenService {
  createToken: ({ id, username, password, jti }: ITokenPayload) => Promise<string>;
}
