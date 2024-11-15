import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF3E54",
        secondary: "#0E1F51",
        lightGray: "#F7F7F7",
        lightPink: "#FFF5F6",
      },
    },
  },
  plugins: [flowbite],
};
