import type { Config } from "tailwindcss";
import flyonui from "flyonui";

export default {
  content: [
    "./node_modules/flyonui/dist/js/*.js",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: true, // Asegúrate de que esté activo si lo necesitas
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [flyonui, require("flyonui/plugin")],
} satisfies Config;
