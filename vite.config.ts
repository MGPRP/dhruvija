import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { imagetools } from "vite-imagetools";

// Public path the site is served from. Defaults to the domain root ("/"), which suits
// Vercel, Netlify or a custom domain. For a sub-folder (e.g. GitHub Pages project site
// at https://<user>.github.io/dhruvija/) build with BASE_PATH=/dhruvija/.
const rawBase = process.env.BASE_PATH ?? "/";
const base = `/${rawBase.replace(/^\/+|\/+$/g, "")}/`.replace(/\/+/g, "/");

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Static build: prerender every route to HTML so dist/ can be served by any static host.
    prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
    pages: [{ path: "/" }, { path: "/sitemap.xml" }],
  },
  nitro: false,

  vite: {
    base,
    plugins: [imagetools()],
  },
});
