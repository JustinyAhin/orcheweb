import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import storyblok from "@storyblok/astro";

import * as dotenv from 'dotenv';
dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: "https://www.orcheweb.com",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
    storyblok({
      accessToken: process.env.STORYBLOCK_ACCESS_TOKEN
    }),
  ],
});
