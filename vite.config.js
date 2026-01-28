import { defineConfig } from "vite";

export default defineConfig({
  root: ".", // project root
  publicDir: "assets", // all static assets (videos, images)
  build: {
    outDir: "dist", // output folder for GitHub Pages
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
