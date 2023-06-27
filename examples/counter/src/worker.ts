import { App, render } from 'manure';
import { MainScreen } from './lib/screens/main/screen';

export interface Env {}

export default <ExportedHandler<Env>>{
	async fetch(request, env) {
		const app = new App({ home: new MainScreen() }),
			body = render(app);
		return new Response(body, {
			headers: {
				'Content-Type': 'text/html;charset=UTF-8',
			},
		});
	},
};
