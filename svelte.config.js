import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss';
import { mdsvex } from "mdsvex";

const production = !process.env.ROLLUP_WATCH;

const extensions = [`.svelte`, '.md', `.mdx`, '.svx']

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex({ extensions: extensions }),
		sveltePreprocess({
		// https://github.com/kaisermann/svelte-preprocess/#user-content-options
		sourceMap: !production,
		
		postcss: {
			plugins: [
				tailwindcss, autoprefixer, postcssNesting
			],
		},
	})],
	extensions: extensions,
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
