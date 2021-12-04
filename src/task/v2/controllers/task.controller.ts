import { Controller, Get } from '@nestjs/common';
import { TaskService } from 'src/task/v1/services/task.service';
import { TaskV2Entity } from '../entities/task.v2.entity';

@Controller({
  version: '2',
  path: '/tasks',
})
export class TaskV2Controller {
  constructor(private taskService: TaskService) {}

  @Get('/')
  public get(): TaskV2Entity[] {
    return this.taskService.getTasks();
  }
}
