// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/node-web/",

  build: {
    outDir: "dist",
    target: "esnext",
  },
});
