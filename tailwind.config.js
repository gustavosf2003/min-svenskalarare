/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        basePrimary: "#212121",
        baseSecondary: "#171717",
        borderPrimary: "#ffffff1a",
      },
    },
  },
  plugins: [],
};
