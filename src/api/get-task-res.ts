import { Task } from './task';

export class GetTaskRes {
  tasks?: Task[];
  total?: number;
  current?: number;
  maxPage?: number;
  constructor(obj?: any) {
    if (obj) {
      this.total = obj.total;
      this.current = obj.current;
      this.maxPage = obj.maxPage;
      if (obj.tasks) {
        for (const t of obj.task) {
          this.tasks?.push(new Task(t));
        }
      }
    }
  }
}
