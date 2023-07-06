/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontSize: {
      title: "2.6rem;",
      paragraph: "1.2rem;",
      sm: "13px",
      md: "16px",
      lg: "24px",
    },
    extend: {
      colors: {
        Lightblue: "#0079FF",
        cGray: "#697C9A",
        cLightgray: "#4B6A9B",
        cDark: "#2B3442",
        cWhite: "#FFFFFF",
        mDark: "#1E2A47",
        dDark: "#141D2F",
        Lightbg: "#F6F8FF",
      },
      fontFamily: {
        spacemono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
