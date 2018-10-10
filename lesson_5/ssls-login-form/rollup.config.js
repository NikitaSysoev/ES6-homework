import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import scss from "rollup-plugin-scss";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";

export default {
  external: ["react", "classnames"],
  input: "src/LoginForm.jsx",
  output: [
    {
      file: "dist/bundle.es.js",
      format: "es",
      exports: "named",
      name: "LoginForm",
      sourceMap: "inline",
      globals: {
        react: "React"
      }
    },
    {
      file: "dist/bundle.umd.js",
      format: "umd",
      exports: "named",
      name: "LoginForm",
      sourceMap: "inline",
      globals: {
        react: "React"
      }
    }
  ],
  plugins: [
    globals(),
    builtins(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    scss({
      output: false
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      extensions: [".jsx", ".js"]
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/react/index.js": ["Component"]
      }
    }),
    babel({
      exclude: "node_modules/**",
    }),
    uglify()
  ]
};
