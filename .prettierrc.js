/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",

  // 플러그인
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  tailwindFunctions: ["clsx"],
};

export default config;
