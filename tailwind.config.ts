import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        itzy: {
          100: "#FED9E0",
          200: "#FDB4C9",
          300: "#FB8EB8",
          400: "#F871B3",
          500: "#F443AB",
          600: "#D1309F",
          700: "#AF2191",
          800: "#8D157F",
          900: "#750C73",
        },
      },
    },
  },
  fontFamily: {
    sans: ["var(--font-pretendard)"],
  },
  plugins: [],
};
export default config;
