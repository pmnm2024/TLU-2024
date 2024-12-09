/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export enum MyMessageBrokerTopics {
  ResetPassword = "reset.password",
  AddSupportRequest = "add.support.request",
  RecentUsers = "recent.users",
  NotiToAdmin = "noti.to.admin"
}
export type AllMessageBrokerTopics = MyMessageBrokerTopics;
