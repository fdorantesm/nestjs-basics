import { Test, TestingModule } from '@nestjs/testing';
import { TaskV2Controller } from 'src/task/v2/controllers/task.controller';


describe('TaskV2Controller', () => {
  let controller: TaskV2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskV2Controller],
    }).compile();

    controller = module.get<TaskV2Controller>(TaskV2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
