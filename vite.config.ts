import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { sitemapPlugin } from "@corentints/tanstack-router-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter(),
    react(),
    tailwindcss(),
    sitemapPlugin({
      baseUrl: "https://portfolio-christian-samson.vercel.app",
      outputPath: "public/sitemap.xml",
      generateRobotsTxt: true,
      routeOptions: {
        "/": { priority: 1.0, changefreq: "monthly" },
      },
    }),
  ],
  base: process.env.VITE_BASE_PATH || "/Portfolio",
});
