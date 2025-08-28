/** @type {import("prettier").Config} */
export default {
  plugins: [],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      options: {
        semi: false,
        singleQuote: true,
      },
    },
  ],
};
