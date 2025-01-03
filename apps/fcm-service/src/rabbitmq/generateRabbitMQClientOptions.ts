/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ConfigService } from "@nestjs/config";
import { RmqOptions, Transport } from "@nestjs/microservices";

export const generateRabbitMQClientOptions = (
  configService: ConfigService,
  topic?: string
): RmqOptions => {
  const RabbitMQUrlStrings = configService.get("RABBITMQ_URLS");

  if (!RabbitMQUrlStrings) {
    throw new Error("RABBITMQ_URLS environment variable must be defined");
  }

  return {
    transport: Transport.RMQ,
    options: {
      urls: [...RabbitMQUrlStrings.split(",")],
      queue: topic,
      queueOptions: {
        consumerGroupId: configService.get("RABBITMQ_SUBSCRIBE_GROUP"),
        noAssert: topic ? false : true, // If topic is not defined, then the queue is not created
      },
    },
  };
};
