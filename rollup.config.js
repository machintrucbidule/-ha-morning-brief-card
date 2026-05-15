// Rollup bundle config for the Lovelace custom card.
// Output: dist/morning-brief-card.js — single ES module that HA loads via a
// resource declaration.
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import nodeResolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/morning-brief-card.js",
    format: "es",
    sourcemap: true,
    // The editor module is dynamically imported by the card — inline it
    // into the single bundle file so HA can load just one resource.
    inlineDynamicImports: true,
  },
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    json(),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser({ format: { comments: false } }),
  ],
};
