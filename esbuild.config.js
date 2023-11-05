import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["index.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  // target: ["chrome58", "firefox57", "safari11", "edge16"],
  outfile: "dist/index.js",
  loader: { ".js": "jsx" },
});
