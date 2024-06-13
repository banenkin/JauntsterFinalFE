/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/images/headerImg.jpeg')",

      },
    },
    screens: {
      phone: "393px",
      tablet: "834px",
      web: "1920px",
    },
  },
  plugins: [],
};
