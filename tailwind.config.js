/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/icons/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "primary-shadow": "0px 4px 16px 0px rgba(17,34,17,0.05)",
        "secondary-shadow": "45px 35px 40px 0px rgba(17,34,17,0.1)",
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
        "4xl": "2560px",
      },
      lineHeight: {
        11: "54px",
        18: "108px",
      },
      backgroundImage: {
        hero: "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%), url('/images/hero_boat.png')",
      },
      colors: {
        "blacklish-green": "#112211",
        "mint-green": "#8DD3BB",
        "light-mint": "#CDEAE1",
        slamon: "#FF8682",
        white: "#FFFFFF",
      },
      height: {
        hero: "599px",
      },
      maxWidth: {
        default: "1440px",
      },
    },
    fontSize: {
      xs: "10px",
      sm: "12px",
      base: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "36px",
      "4xl": "40px",
      "5xl": "44px",
      "6xl": "52px",
      "7xl": "58px",
      "9xl": "80px",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      heading: ["Trade Gothic", "sans-serif"],
    },
  },
  plugins: [],
};
