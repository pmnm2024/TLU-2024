import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HistorySupportModuleBase } from "./base/historySupport.module.base";
import { HistorySupportService } from "./historySupport.service";
import { HistorySupportController } from "./historySupport.controller";

@Module({
  imports: [HistorySupportModuleBase, forwardRef(() => AuthModule)],
  controllers: [HistorySupportController],
  providers: [HistorySupportService],
  exports: [HistorySupportService],
})
export class HistorySupportModule {}
