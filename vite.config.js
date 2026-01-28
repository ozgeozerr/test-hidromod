import { defineConfig } from "vite";

export default defineConfig({
  base: "/test-hidromod/", // <-- GitHub Pages repo name
  publicDir: "assets", // your videos/images folder
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      "@": "./src", // adjust if you actually have src folder
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
