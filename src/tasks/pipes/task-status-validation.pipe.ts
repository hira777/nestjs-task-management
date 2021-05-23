import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatused = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    if (!this.isStatusValid(value.status)) {
      throw new BadRequestException(`"${value.status}" is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatused.indexOf(status) !== -1;
  }
}
