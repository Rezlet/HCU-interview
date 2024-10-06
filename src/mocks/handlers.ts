import { setupWorker } from 'msw/browser';
import { http } from 'msw';
import { MockConst } from './mock-const';
import { GetTaskApi, GetTaskDefaultApi } from './get-task-api';
import { isEqual } from 'lodash';
import { PostTaskApi, PostTaskDefaultApi } from './post-task-api';

type AnyObject = Record<string, any>;

function normalize(obj: AnyObject): AnyObject {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = String(value);
    return acc;
  }, {} as AnyObject);
}

function areObjectsEqual(obj1: AnyObject, obj2: AnyObject): boolean {
  const normalizedObj1 = normalize(obj1);
  const normalizedObj2 = normalize(obj2);
  return isEqual(normalizedObj1, normalizedObj2);
}

const handlers = [
  http.get(MockConst.SERVER_PATH + '/task', async ({ params, request }) => {
    const url = new URL(request.url);
    const obj = {
      id: url.searchParams.get('id'),
      title: url.searchParams.get('title'),
      completed: url.searchParams.get('completed'),
      page: url.searchParams.get('page'),
      pageSize: url.searchParams.get('pageSize'),
    };

    for (const data of GetTaskApi) {
      if (areObjectsEqual(obj, data.request)) {
        console.log('compare success');
        return new Response(JSON.stringify(data.response.body), {
          headers: {
            'Content-Type': 'application/json',
          },
          status: data.response.status,
        });
      }
    }
    return new Response(JSON.stringify(GetTaskDefaultApi.response.body), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: GetTaskDefaultApi.response.status,
    });
  }),

  http.post(MockConst.SERVER_PATH + '/task', async ({ params, request }) => {
    const form = await request.formData();
    const obj = {
      title: form.get('title'),
    };

    for (const data of PostTaskApi) {
      if (areObjectsEqual(obj, data.request)) {
        return new Response(JSON.stringify(data.response.body), {
          headers: {
            'Content-Type': 'application/json',
          },
          status: data.response.status,
        });
      }
    }
    return new Response(JSON.stringify(PostTaskDefaultApi.response.body), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: PostTaskDefaultApi.response.status,
    });
  }),
];

export const worker = setupWorker(...handlers);
