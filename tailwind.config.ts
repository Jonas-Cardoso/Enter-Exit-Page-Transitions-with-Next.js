import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "380px",
      md: "767px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["var(--font-manrope)"],
    },
  },
  plugins: [],
};
export default config;
