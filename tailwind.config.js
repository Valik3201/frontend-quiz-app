/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      "dark-navy": "#313E51",
      "grey-navy": "#626C7F",
      "light-bluish": "#ABC1E1",
      "light-grey": "#F4F6FA",
      green: "#26D782",
      navy: "#3B4D66",
      purple: "#A729F5",
      red: "#EE5454",
      "pure-white": "#FFFFFF",
    },
    fontFamily: {
      display: ["Rubik", "sans-serif"],
    },
    extend: {
      fontSize: {
        "9xl": [
          "9rem",
          {
            fontWeight: "500",
            lineHeight: "100%",
          },
        ],
        "4xl": [
          "4rem",
          {
            fontWeight: "500",
            lineHeight: "100%",
          },
        ],
        "4xl-light": [
          "4rem",
          {
            fontWeight: "300",
            lineHeight: "100%",
          },
        ],
        "2xl": [
          "2.25rem",
          {
            fontWeight: "500",
            lineHeight: "120%",
          },
        ],
        xl: [
          "1.75rem",
          {
            fontWeight: "500",
            lineHeight: "100%",
          },
        ],
        lg: [
          "1.5rem",
          {
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
        base: [
          "1.25rem",
          {
            fontWeight: "400",
            lineHeight: "150%",
          },
        ],
      },
      backgroundImage: {
        "mobile-dark": "url('/assets/pattern-background-mobile-dark.svg')",
        "tablet-dark": "url('/assets/pattern-background-tablet-dark.svg')",
        "desktop-dark": "url('/assets/pattern-background-desktop-dark.svg')",
        "mobile-light": "url('/assets/pattern-background-mobile-light.svg')",
        "tablet-light": "url('/assets/pattern-background-tablet-light.svg')",
        "desktop-light": "url('/assets/pattern-background-desktop-light.svg')",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
