/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8E37DB",
        secondary: "#BF76FF",
        thertiary: "#C68F01",
        dark: "#040009",
        light: "#FEFCFF",
      },
      backgroundColor: {
        primary: "#8E37DB",
        secondary: "#BF76FF",
        thertiary: "#C68F01",
        dark: "#040009",
        light: "#FEFCFF",
      },
      fontFamily: {
        rubik: '"Rubik", sans-serif',
        robotoMono: '"Roboto Mono", monospace',
      },
      boxShadow: {
        card: "8px 12px 0px 0px #BF76FF",
      },
    },
  },
  plugins: [],
};

