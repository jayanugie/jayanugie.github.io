/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#161616",
        "bg-navbar": "#1c1c1c",
        "hover-navbar": "#2b2b2b",
        "text-primary": "#f2f2f2",
        "text-secondary": "#7b7b7b",
        "border-color": "#E8E8E817",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
