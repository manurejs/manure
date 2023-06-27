import { App, render } from 'manure';

export interface Env {}

export default <ExportedHandler<Env>>{
	async fetch(request, env) {
		const app = new App(),
			body = render(app);
		return new Response(body, {
			headers: {
				'Content-Type': 'text/html;charset=UTF-8',
			},
		});
	},
};
