import { post, render } from 'manure';
import { IdManager } from 'manure/src/id';
import { CounterApp } from './lib/app';

export interface Env {}

export default <ExportedHandler<Env>>{
  async fetch(request, env) {
    IdManager.getInstance().clear();
    const app = new CounterApp();
    if (request.method === 'GET') {
      const body = render(app),
        response = new Response(body, {
          headers: { 'Content-Type': 'text/html;charset=UTF-8' },
        });
      return response;
    } else if (request.method === 'POST') {
      const formData = await request.formData(),
        body = post(app, formData),
        response = new Response(body, {
          headers: { 'Content-Type': 'text/html;charset=UTF-8' },
        });
      return response;
    }
  },
};
