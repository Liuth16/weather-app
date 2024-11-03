module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb-base", // Enforces Airbnb's base JavaScript style guide
    "plugin:prettier/recommended", // Turns off ESLint rules that conflict with Prettier
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
