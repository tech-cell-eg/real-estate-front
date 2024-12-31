/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C29062",
      },
      components: {
        label: {
          styles: {
            default: {
              color: "black",
            },
          },
        },
      },
    },
  },
  plugins: [import("flowbite/plugin"), import("@tailwindcss/line-clamp")],
};
