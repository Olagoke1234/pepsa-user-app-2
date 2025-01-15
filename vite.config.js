// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-router-dom"],
  },
  build: {
    rollupOptions: {
      external: ["react-router-dom"],
    },
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     include: ["react-router-dom"],
//   },
//   build: {
//     rollupOptions: {
//       external: ["react-router-dom"],
//     },
//   },
//   resolve: {
//     alias: {
//       react: require.resolve("react"),
//       "react-dom": require.resolve("react-dom"),
//     },
//   },
// });
