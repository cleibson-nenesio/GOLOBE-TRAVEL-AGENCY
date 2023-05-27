/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
    },
    colors: {
      "blacklish-green": "#112211",
      "mint-green": "#8DD3BB",
      slamon: "#FF8682",
      white: "#FFFFFF",
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
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
