export enum MyMessageBrokerTopics {
  Donate = "donate",
  HandleSupportRequest = "handle.support.request",
  HandleWarehouse = "handle.warehouse",
  ResetPassword = "reset.password",
  SendMail = "send.mail",
}
export type AllMessageBrokerTopics = MyMessageBrokerTopics;
