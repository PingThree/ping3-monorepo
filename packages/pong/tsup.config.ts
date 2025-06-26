import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false, // Keep unminified for better debugging
  treeshake: true,
  target: "es2020",
  outDir: "dist",
  external: ["react", "react-dom", "viem", "wagmi"],
  banner: {
    js: `/**
 * @ping3/pong
 * TypeScript bindings and React hooks for the Ping3 smart contract
 * 
 * @author ping3
 * @license MIT
 */`,
  },
});
