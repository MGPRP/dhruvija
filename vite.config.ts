import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Static build: prerender every route to HTML so dist/ can be served by any static host.
    prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
    pages: [{ path: "/" }, { path: "/sitemap.xml" }],
  },
  nitro: false,

  vite: {
    base: "/demo/Dhruvija-Properties/",
    plugins: [imagetools()],
  },
});
