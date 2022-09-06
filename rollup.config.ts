import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import tsPlugin from '@rollup/plugin-typescript';
import {terser} from 'rollup-plugin-terser';
import dts from "rollup-plugin-dts";

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
                sourcemap: true,
            },{
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            }
        ],
        plugins:[
            postcss({
                plugins: [],
                minimize: true
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external(),
            resolve(),
            tsPlugin(),
            terser(),
        ],
        onwarn: function(warning) {
            // Skip certain warnings
        
            // should intercept ... but doesn't in some rollup versions
            if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
        
            // console.warn everything else
            console.warn( warning.message );
        }
    },
]