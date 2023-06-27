export interface Env {}

export default <ExportedHandler<Env>>{
	async fetch(request, env) {
		return new Response('Hello World!');
	},
};
