import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   server: {
//     proxy: {
//       "/api": {
//         target: "https://1d6b-37-214-62-197.ngrok-free.app",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    proxy: {
      // Proxy requests starting with /api to the backend server at localhost:5000
      "/api": {
        target: "https://1d6b-37-214-62-197.ngrok-free.app", // Backend server URL
        changeOrigin: true, // Needed for virtual hosted sites
      },
    },
  },
});
