import { TaskStatus } from '../task.model';

export class GetTasksFilterDto {
  status: keyof typeof TaskStatus;
  search: string;
}
