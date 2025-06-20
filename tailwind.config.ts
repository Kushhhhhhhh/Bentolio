import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        "david-libre": ["var(--font-david-libre)", "serif"],
        "fira-code": ["var(--font-fira-code)", "monospace"],
        lora: ["var(--font-lora)", "serif"],
        spectral: ["var(--font-spectral)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;