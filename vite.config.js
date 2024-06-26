// vite.config.js
import { defineConfig } from "vite";
import cp from "vite-plugin-cp";

export default defineConfig({
  build: {
    outDir: "dist",
    target: "esnext",
  },

  plugins: [
    cp({
      targets: [{ src: "_headers", dest: "dist" }],
    }),
});
