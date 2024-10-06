export class PostTaskRes {
  result?: boolean;
  message?: string;
  constructor(obj?: any) {
    if (obj) {
      this.result = obj.result;
      this.message = obj.message;
    }
  }
}
