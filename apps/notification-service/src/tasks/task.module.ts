import { Module } from '@nestjs/common';
import { TasksService } from './task.service';
import { OutboxModule } from 'src/outbox/outbox.module';

@Module({
  imports: [OutboxModule],
  providers: [TasksService],
})
export class TasksModule {}
