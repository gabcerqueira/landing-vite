import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    port: 5173,
    host: true,
    hmr: {
      port: 5173,
      clientPort: 5173,
    },
  },
});
