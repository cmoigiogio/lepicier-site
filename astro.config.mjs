// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

/**
 * Canonical URL: SITE_URL when set (e.g. https://www.lepicier.paris once the domain is switched),
 * otherwise the Vercel production URL, otherwise localhost.
 */
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:4321");

export default defineConfig({
  site,
  trailingSlash: "never",
  build: { format: "file" },
  image: { layout: "constrained" },
  vite: { plugins: [tailwindcss()] },
});
