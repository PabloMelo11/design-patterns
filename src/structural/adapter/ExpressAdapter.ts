import express, { Request, Response } from 'express';
import Http from './Http';

export default class ExpressAdapter implements Http {
  private app: any;

  constructor() {
    this.app = express();
  }

  private parseUrl(url: string) {
    return url.replace(/\{/g, ':').replace(/\}/g, '');
  }

  async on(method: string, url: string, callback: any): Promise<any> {
    this.app[method](
      this.parseUrl(url), // change in params when use express and hapi
      async function (req: Request, res: Response) {
        const output = await callback(req.params, req.body);
        res.status(200).json(output);
      }
    );
  }

  async listen(port: number): Promise<void> {
    return this.app.listen(port);
  }
}
