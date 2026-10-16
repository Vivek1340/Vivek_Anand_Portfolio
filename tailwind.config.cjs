/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070C17",
        surface: "#0D1626",
        "surface-2": "#111D31",
        line: "#1B2A3F",
        ink: "#E6EDF5",
        secondary: "#8B9BB0",
        teal: "#2DD4BF",
        amber: "#F59E0B",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "ui-sans-serif", "sans-serif"],
        body: ['"Geist"', "ui-sans-serif", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
