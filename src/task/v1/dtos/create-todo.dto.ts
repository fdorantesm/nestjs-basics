import { IsDateString, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  public title: string;

  @IsDateString()
  public duedate: Date;

  @IsString()
  public type: string;
}
