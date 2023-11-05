import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  entryPoints: ["index.js"],
  bundle: true,
  outdir: "dist",
  loader: { ".js": "jsx" },
  sourcemap: true,
  minify: false,
  inject: ["./react-shim.js"],
});

await ctx.watch();

let { host, port } = await ctx.serve({
  servedir: "dist",
});

console.log(host, port);
