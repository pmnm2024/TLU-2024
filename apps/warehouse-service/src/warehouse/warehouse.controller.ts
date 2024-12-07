import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WarehouseService } from "./warehouse.service";
import { WarehouseControllerBase } from "./base/warehouse.controller.base";
import { MyMessageBrokerTopics } from "src/rabbitmq/topics";
import { EventPattern, Payload } from "@nestjs/microservices";
import { RabbitMQMessage } from "src/rabbitmq/RabbitMQMessage";
@swagger.ApiTags("warehouses")
@common.Controller("warehouses")
export class WarehouseController extends WarehouseControllerBase {
  constructor(protected readonly service: WarehouseService) {
    super(service);
  }
  @EventPattern(MyMessageBrokerTopics.HandleWarehouse)
  async onHanldleWarehouse(
    @Payload()
    message: RabbitMQMessage
  ): Promise<void> {
    try {
      const { data } = message as any;
      console.log(data);
      await this.service.handleWarehouse(data);
      return;
    } catch (error) {
      throw error;
    }
  }
}
