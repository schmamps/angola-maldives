import typescript from '@rollup/plugin-typescript';
import jsonImport from '@rollup/plugin-json';
import {terser} from 'rollup-plugin-terser';

export default {
	input: 'src/ts/index.ts',
	output: {
		file: 'build.safariextension/yu.js',
		format: 'iife',
	},
	plugins: [
		// resolve(),
		typescript({
			lib: ['DOM', 'ES2017'],
			target: 'ES6'
		}),
		jsonImport(),
		terser(),
	],
};
