/**
 * Site font registration — single place to change families, weights, or provider.
 *
 * Trinity Catholic College:
 *   - Headings: Open Sans (Google Font via @fontsource)
 *   - Body: system UI stack (no webfont needed)
 *
 * - Used by `astro.config.mjs` (`fonts`) and layout `<SiteFonts />` (preload / Font component).
 * - `cssVariable` values must match tokens consumed in CSS (`--font-body`, `--font-headings`).
 * - Prefer `fontProviders.fontsource()` (local via @fontsource packages) over remote providers.
 *
 * @see https://docs.astro.build/en/guides/fonts/
 */
import { fontProviders } from "astro/config";

export const siteFonts = [
  {
    name: "Open Sans",
    cssVariable: "--font-headings",
    provider: fontProviders.fontsource(),
    weights: [400, 700],
    styles: ["normal"],
  },
  {
    name: "Open Sans",
    cssVariable: "--font-body",
    provider: fontProviders.fontsource(),
    weights: [400, 600, 700],
    styles: ["normal"],
    fallbacks: [
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ],
  },
];
