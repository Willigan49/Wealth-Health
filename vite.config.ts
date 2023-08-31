/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: "/",
    plugins: [react()],
    test: {
      environment: "jsdom",
      setupFiles: ["./__tests__/setup.ts"],
      globals: true,
    },
  };
  if (command !== "serve") {
    config.base = "/react-vite-gh-pages/";
  }

  return config;
});
