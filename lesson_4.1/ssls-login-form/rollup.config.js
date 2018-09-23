import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export default {
    external: ['react'],
    input: 'src/LoginForm/LoginForm.jsx',
    output: {
        file: 'dist/index.js',
        format: 'es',
        name: 'LoginForm',
        sourceMap: 'inline',
        globals: {
            'react': 'React'
        },
    },
    plugins: [
        globals(),
        builtins(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        scss({
            output: 'css/bundle.css',
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
            extensions: ['.jsx', '.js'],
        }),
        commonjs(
            {
                include: 'node_modules/**',
                namedExports: {
                    'node_modules/react/index.js': ['Component']
                }
            }
        ),
        babel({
            exclude: 'node_modules/**'
        }),
        uglify(),
    ],
};