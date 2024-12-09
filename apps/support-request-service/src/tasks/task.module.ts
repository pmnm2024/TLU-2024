/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Module } from '@nestjs/common';
import { TasksService } from './task.service';
import { OutBoxModule } from 'src/outBox/outBox.module';

@Module({
  imports: [OutBoxModule],
  providers: [TasksService],
})
export class TasksModule {}
