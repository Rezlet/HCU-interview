export interface BaseRequest {
  HTTP_METHOD: 'GET' | 'POST' | 'PUT' | 'DELETE';

  PATH: string;

  MIME_TYPE:
    | 'application/x-www-form-urlencoded'
    | 'application/json'
    | 'multipart/form-data'
    | 'text/plain; charset=utf-8';

  QUERY_PARAM: string[];

  PATH_STRING: string[];

  FORM: string[];

  BODY?: string[] | boolean;

  val: any;

  createResponse(response: any): any;
}
