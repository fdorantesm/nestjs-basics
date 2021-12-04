import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [TaskModule, CommonModule],
})
export class AppModule {}
