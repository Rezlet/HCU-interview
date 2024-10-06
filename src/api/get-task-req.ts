import { BaseRequest } from './base/baseRequest';
import { GetTaskRes } from './get-task-res';

export class GetTaskReq implements BaseRequest {
  readonly HTTP_METHOD = 'GET';
  readonly PATH = '/api/task';
  readonly MIME_TYPE = 'text/plain; charset=utf-8';
  readonly QUERY_PARAM: string[] = ['id', 'title', 'completed'];
  readonly PATH_STRING: string[] = [];
  readonly FORM: string[] = [];

  readonly BODY?: boolean | string[] | undefined;

  public constructor(
    public val: {
      id?: string;
      title?: string;
      completed?: boolean;
      page?: number;
      pageSize?: number;
    },
  ) {}

  createResponse(obj: any): GetTaskRes {
    return new GetTaskRes(obj);
  }
}
