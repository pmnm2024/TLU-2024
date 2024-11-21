import { Module } from "@nestjs/common";
import { ReliefItemModuleBase } from "./base/reliefItem.module.base";
import { ReliefItemService } from "./reliefItem.service";
import { ReliefItemController } from "./reliefItem.controller";

@Module({
  imports: [ReliefItemModuleBase],
  controllers: [ReliefItemController],
  providers: [ReliefItemService],
  exports: [ReliefItemService],
})
export class ReliefItemModule {}
