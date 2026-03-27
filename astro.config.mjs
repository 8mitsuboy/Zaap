// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bzine.netlify.app/",
  integrations: [preact(), mdx()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});