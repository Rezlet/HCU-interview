import { PostTaskRes } from '../api/post-task-res';

export const PostTaskApi: {
  request: any;
  response: { status: number; body: PostTaskRes };
}[] = [
  {
    request: { title: 'heheh' },
    response: {
      status: 406,
      body: {
        result: false,
        message: "Can't save this title",
      },
    },
  },
];

export const PostTaskDefaultApi: {
  request: any;
  response: { status: number; body: PostTaskRes };
} = {
  request: {},
  response: {
    status: 200,
    body: {
      result: true,
    },
  },
};
