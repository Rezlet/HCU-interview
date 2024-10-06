export class Task {
  id?: number;
  title?: string;
  completed?: boolean;

  constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.title = obj.title;
      this.completed = obj.completed;
    }
  }
}

export interface TaskResponse {
  current: number;
  maxPage: number;
  total: number;
  tasks: Task[];
}
