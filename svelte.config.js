import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'music',
		file: 'public/bundle.js'
	},
	preprocess: preprocess(),
	plugins: [
		adapter({
			css: (css) => {
				css.write('public/bundle.css');
			}
		})
	]
};

export default config;
