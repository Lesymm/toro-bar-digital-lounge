import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Get the base URL from the environment variable, or default to '/'
const BASE_URL = process.env.VITE_BASE_URL || '/';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: BASE_URL,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
