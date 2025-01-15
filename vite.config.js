import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures relative paths are used in production
  optimizeDeps: {
    include: ["react-router-dom"],
  },
  build: {
    outDir: "dist", // Explicitly set the output directory
    rollupOptions: {
      external: ["react-router-dom"],
    },
  },
});
