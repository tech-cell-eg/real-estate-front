/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #C29062, #000000)',
      },
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
