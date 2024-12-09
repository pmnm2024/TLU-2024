/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export enum MyMessageBrokerTopics {
  AddSupportRequest = "add.support.request",
  Donate = "donate",
  HandleSupportRequest = "handle.support.request",
  HandleWarehouse = "handle.warehouse",
  NotiToAdmin = "noti.to.admin",
  RecentUsers = "recent.users",
  ResetPassword = "reset.password",
  SendMail = "send.mail",
}
export type AllMessageBrokerTopics = MyMessageBrokerTopics;
