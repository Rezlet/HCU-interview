import { BaseRequest } from './base/baseRequest';
import { PostTaskRes } from './post-task-res';

export class PostTaskReq implements BaseRequest {
  readonly HTTP_METHOD = 'POST';
  readonly PATH = '/api/task';
  readonly MIME_TYPE = 'application/x-www-form-urlencoded';
  readonly QUERY_PARAM: string[] = [];
  readonly PATH_STRING: string[] = [];
  readonly FORM: string[] = ['title'];

  readonly BODY?: boolean | string[] | undefined;

  public constructor(
    public val: {
      title?: string;
    },
  ) {}

  createResponse(obj: any): PostTaskRes {
    return new PostTaskRes(obj);
  }
}
