/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html","./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "sans-serif"],
        cursive: ["Birthstone Bounce", "cursive"]
      },
      colors: {
        primary: "#f5f5f5",
        secondary: "#333",
      },
      container: {
        center:true,
        // padding: {
        //   DEFAULT: "1rem",
        //   sm: "2rem",
        //   lg: "4rem",
        //   xl: "5rem",
        // },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};

export default config;