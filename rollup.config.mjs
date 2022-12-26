import styles from "rollup-plugin-styles";
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import image from 'rollup-plugin-img';

export default {
    input: './index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    watch: {
        exclude: 'node_modules/**'
    },
    plugins: [
        styles(),
        babel({ babelHelpers: 'bundled' }),
        serve({
            open: true,
            contentBase: './',
            port: 8000,
        }),
        livereload(),
        image({
            limit: 10000
        }),
    ],
};