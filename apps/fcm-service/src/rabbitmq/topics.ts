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
