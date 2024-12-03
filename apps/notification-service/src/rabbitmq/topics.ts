export enum MyMessageBrokerTopics {
  ResetPassword = "reset.password",
  SendMail = "send.mail",
  SendMailFail = "send.mail.fail",
  Donate = "donate",
  HandleSupportRequest = "handle.support.request",
}
export type AllMessageBrokerTopics = MyMessageBrokerTopics;
