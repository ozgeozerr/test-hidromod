import { defineConfig } from "vite";
import { resolve } from "path"; // <-- needed for resolve()

export default defineConfig({
  root: ".", // project root
  publicDir: "assets", // all static assets (videos, images)
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        afet: resolve(__dirname, "afet-tahmini.html"),
        askeri: resolve(__dirname, "askeri-hava-tahmini.html"),
        hava: resolve(__dirname, "hava-durumu.html"),
        iklim: resolve(__dirname, "iklim-degisikligi.html"),
        sivil: resolve(__dirname, "sivil-havacilik.html"),
        yenilenebilir: resolve(__dirname, "yenilenebilir-enerji.html"), // fixed typo
      },
    },
    outDir: "dist", // output folder for GitHub Pages / Netlify
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
