import { hello } from '../Functions/Hello';
import { Request, RequestHandler, Response } from 'express';

export type HelloHandler = () => RequestHandler;

const makeHelloHandler: HelloHandler = () => {
  return async (request: Request, response: Response): Promise<void> => {
    if (request.body && request.body.name) {
      const message = hello(request.body.name);
      response.status(200).send(message);
    } else {
      response.status(400).send();
    }
  };
};

export default makeHelloHandler;
