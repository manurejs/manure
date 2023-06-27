import { post, render } from 'manure';
import { CounterApp } from './lib/app';

export interface Env {}

export default <ExportedHandler<Env>>{
  async fetch(request, env) {
    const app = new CounterApp();
    if (request.method === 'GET') {
      const body = render(app);
      return new Response(body, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      });
    } else if (request.method === 'POST') {
      const json = await request.json(),
        body = post(app, json);
    }
  },
};
