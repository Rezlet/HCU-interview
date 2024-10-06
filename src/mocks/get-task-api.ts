import { GetTaskRes } from '../api/get-task-res';
import { MockConst } from './mock-const';

export const GetTaskApi: {
  request: any;
  response: { status: number; body: GetTaskRes };
}[] = [
  {
    request: { id: null, title: null, completed: null, page: 0, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: 20,
        current: 0,
        maxPage: 4,
        tasks: MockConst.TASK1.concat(MockConst.TASK2).slice(0, 5),
      },
    },
  },
  {
    request: { id: null, title: null, completed: null, page: 1, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: 20,
        current: 1,
        maxPage: 4,
        tasks: MockConst.TASK1.concat(MockConst.TASK2).slice(5, 10),
      },
    },
  },
  {
    request: { id: null, title: null, completed: null, page: 2, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: 20,
        current: 2,
        maxPage: 4,
        tasks: MockConst.TASK1.concat(MockConst.TASK2).slice(10, 15),
      },
    },
  },
  {
    request: { id: null, title: null, completed: null, page: 3, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: 20,
        current: 3,
        maxPage: 4,
        tasks: MockConst.TASK1.concat(MockConst.TASK2).slice(15, 20),
      },
    },
  },
  {
    request: { id: null, title: null, completed: true, page: 0, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK1.length,
        current: 0,
        maxPage: Math.ceil(MockConst.TASK1.length / 5),
        tasks: MockConst.TASK1.slice(0, 5),
      },
    },
  },
  {
    request: { id: null, title: null, completed: true, page: 1, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK1.length,
        current: 1,
        maxPage: Math.ceil(MockConst.TASK1.length / 5),
        tasks: MockConst.TASK1.slice(5, 10),
      },
    },
  },
  {
    request: { id: null, title: null, completed: true, page: 2, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK1.length,
        current: 2,
        maxPage: Math.ceil(MockConst.TASK1.length / 5),
        tasks: MockConst.TASK1.slice(10, 15),
      },
    },
  },
  {
    request: { id: null, title: null, completed: true, page: 3, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK1.length,
        current: 3,
        maxPage: Math.ceil(MockConst.TASK1.length / 5),
        tasks: MockConst.TASK1.slice(15, 20),
      },
    },
  },
  {
    request: { id: null, title: null, completed: false, page: 0, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK2.length,
        current: 0,
        maxPage: Math.ceil(MockConst.TASK2.length / 5),
        tasks: MockConst.TASK2.slice(0, 5),
      },
    },
  },
  {
    request: { id: null, title: null, completed: false, page: 1, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK2.length,
        current: 1,
        maxPage: Math.ceil(MockConst.TASK2.length / 5),
        tasks: MockConst.TASK2.slice(5, 10),
      },
    },
  },
  {
    request: { id: null, title: null, completed: false, page: 2, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK2.length,
        current: 2,
        maxPage: Math.ceil(MockConst.TASK2.length / 5),
        tasks: MockConst.TASK2.slice(10, 15),
      },
    },
  },
  {
    request: { id: null, title: null, completed: false, page: 3, pageSize: 5 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK2.length,
        current: 3,
        maxPage: Math.ceil(MockConst.TASK2.length / 5),
        tasks: MockConst.TASK2.slice(15, 20),
      },
    },
  },
  {
    request: { id: null, title: null, completed: null, page: 0, pageSize: 10 },
    response: {
      status: 200,
      body: {
        total: 20,
        current: 0,
        maxPage: 2,
        tasks: MockConst.TASK1.concat(MockConst.TASK2).slice(0, 10),
      },
    },
  },
  {
    request: { id: null, title: null, completed: null, page: 1, pageSize: 10 },
    response: {
      status: 200,
      body: {
        total: 20,
        current: 1,
        maxPage: 2,
        tasks: MockConst.TASK1.concat(MockConst.TASK2).slice(10, 20),
      },
    },
  },
  {
    request: { id: null, title: null, completed: true, page: 0, pageSize: 10 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK1.length,
        current: 0,
        maxPage: Math.ceil(MockConst.TASK1.length / 10),
        tasks: MockConst.TASK1.slice(0, 10),
      },
    },
  },
  {
    request: { id: null, title: null, completed: true, page: 1, pageSize: 10 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK1.length,
        current: 1,
        maxPage: Math.ceil(MockConst.TASK1.length / 10),
        tasks: MockConst.TASK1.slice(10, 20),
      },
    },
  },
  {
    request: { id: null, title: null, completed: false, page: 0, pageSize: 10 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK2.length,
        current: 0,
        maxPage: Math.ceil(MockConst.TASK2.length / 10),
        tasks: MockConst.TASK2.slice(0, 10),
      },
    },
  },
  {
    request: { id: null, title: null, completed: false, page: 1, pageSize: 10 },
    response: {
      status: 200,
      body: {
        total: MockConst.TASK2.length,
        current: 1,
        maxPage: Math.ceil(MockConst.TASK2.length / 10),
        tasks: MockConst.TASK2.slice(10, 20),
      },
    },
  },
];

export const GetTaskDefaultApi: {
  request: any;
  response: { status: number; body: GetTaskRes };
} = {
  request: { id: '', title: '', completed: '', page: '', pageSize: '' },
  response: {
    status: 200,
    body: {
      total: 20,
      current: 0,
      maxPage: 1,
      tasks: [],
    },
  },
};
