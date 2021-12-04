import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { TaskV1Controller } from './v1/controllers/task.controller';
import { TaskService } from './v1/services/task.service';
import { TaskV2Controller } from './v2/controllers/task.controller';

@Module({
  imports: [CommonModule],
  providers: [TaskService],
  controllers: [TaskV1Controller, TaskV2Controller],
})
export class TaskModule {}
