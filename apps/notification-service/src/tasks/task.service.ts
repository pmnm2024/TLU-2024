import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { OutboxService } from 'src/outbox/outbox.service';

@Injectable()
export class TasksService {
  constructor(private readonly outBoxService: OutboxService) { }
  private readonly logger = new Logger(TasksService.name);
  //   private readonly

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleCron() {
    try {
      await this.outBoxService.processOutboxEvents();
      this.logger.debug("START CRONJOB!!!")
    } catch (error) {
      this.logger.debug(error)
    }
  }
}
