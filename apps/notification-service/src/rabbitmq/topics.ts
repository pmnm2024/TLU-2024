export enum MyMessageBrokerTopics {
  ResetPassword = "reset.password",
  SendMail = "send.mail",
  SendMailFail = "send.mail.fail",
  Donate = "donate",
  HandleSupportRequest = "handle.support.request",
  HandleWarehouse = "handle.warehouse",
  AddSupportRequest = "add.support.request",
  RecentUsers = "recent.users",
  NotiToAdmin = "noti.to.admin"
}
export type AllMessageBrokerTopics = MyMessageBrokerTopics;
