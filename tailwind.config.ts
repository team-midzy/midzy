import colors from "./config/colors";
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        itzy: colors.itzy,
        gold: colors.gold,
        primary: colors.gold,
      },
    },
    container: {
      center: true,
    },
  },
  fontFamily: {
    sans: ["var(--font-pretendard)"],
  },
  plugins: [],
};
export default config;
