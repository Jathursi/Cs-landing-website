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
        accent: "#ff6347",
        yel: "#FFEA00",
        org: "#FF6D00",
        yel1: "#FFD600",
        yel_light: "#FFFDE7",
        b0: '#0D47A1',
        b2: '#304FFE',
        insta: '#E91E63',
        // yel_light: "#FFE57F",
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