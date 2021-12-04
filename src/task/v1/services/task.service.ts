import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { UuidService } from 'src/common/services/uuid.service';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { TaskEntity } from '../entities/task.entity';

@Injectable()
export class TaskService {
  constructor(private uuidService: UuidService) {}

  private tasks: TaskEntity[] = [];

  public getTasks(): TaskEntity[] {
    return this.tasks;
  }

  public getTask(id: string): TaskEntity {
    const task = this.tasks.find((task: TaskEntity) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  public create(taskDto: CreateTodoDto): TaskEntity {
    const task = {
      id: this.uuidService.getUuid(),
      title: taskDto.title,
      type: taskDto.type,
      duedate: taskDto.duedate,
    };
    this.tasks.push(task);
    Logger.log(JSON.stringify(this.tasks));
    return task;
  }

  public delete(id: string): void {
    this.tasks = this.tasks.filter((task: TaskEntity) => task.id !== id);
  }
}
