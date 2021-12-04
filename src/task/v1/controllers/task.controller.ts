import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { TaskEntity } from '../entities/task.entity';
import { TaskService } from '../services/task.service';


@Controller({
  version: '1',
  path: '/tasks',
})
export class TaskV1Controller {
  constructor(private taskService: TaskService) {}

  @Get('/')
  public get(): TaskEntity[] {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  public getTask(@Param('id') id: string): TaskEntity {
    return this.taskService.getTask(id);
  }

  @Post('/')
  public create(@Body() body: CreateTodoDto): TaskEntity {
    return this.taskService.create(body);
  }

  @Delete('/:id')
  public delete(@Param('id') id: string) {
    this.taskService.delete(id);
  }
}
