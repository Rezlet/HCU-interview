import axios, { AxiosResponse } from 'axios';
import { BaseRequest } from '../../api/base/baseRequest';

export class CustomHttpService {
  static async send<T>(request: BaseRequest): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.request<T>({
        method: request.HTTP_METHOD,
        url: request.PATH,
        params: request.HTTP_METHOD === 'GET' ? request.val : undefined,
        data: request.HTTP_METHOD !== 'GET' ? request.val : undefined,
        headers: {
          'Content-Type': request.MIME_TYPE,
        },
      });

      return response.data;
    } catch (error) {
      console.error('HTTP GET error:', error);
      throw error;
    }
  }
}
