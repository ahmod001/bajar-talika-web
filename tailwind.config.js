
const { heroui } = require('@heroui/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/components/navbar.js",
  ],
  theme: {},
  darkMode: "class",
  plugins: module.exports = {
  plugins: [
    heroui()]
}}