import Hapi from '@hapi/hapi';
import Http from './Http';

export default class HapiAdapter implements Http {
  private server: any;

  constructor() {
    this.server = Hapi.server({});
  }

  async on(method: string, url: string, callback: any): Promise<any> {
    this.server.route({
      path: url,
      method,
      handler(request: any) {
        return callback(request.params, request.body);
      },
    });
  }

  async listen(port: number): Promise<void> {
    this.server.settings.port = port;
    this.server.start();
  }
}
