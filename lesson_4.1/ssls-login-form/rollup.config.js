import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import scss from 'rollup-plugin-scss';
import server from 'rollup-plugin-server';
import React from 'react';
import ReactDOM from 'react-dom';

export default {
    input: 'src/LoginForm/LoginForm.jsx',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'LoginForm',
        sourceMap: 'inline',
        globals: {
            React: 'React',
            ReactDOM: 'ReactDOM'
        }
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        scss(),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
            extensions: ['.js', '.jsx'],
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
            exclude: 'node_modules/**',
        }),
        uglify(),
    ],
};