/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-container": "#E61C5D", // Vibrant Magenta
        "on-primary": "#FFFFFF",
        "background": "#0D0D0D", // Deep Black
        "surface": "#1A1A1A",
        "surface-container-high": "#242424",
        "on-background": "#FFFFFF",
        "secondary": "#B5B5B5",
        "outline": "#E61C5D",
        "inverse-primary": "#C2184D",
      },
      fontFamily: {
        "condensed": ["Oswald", "sans-serif"],
        "script": ["Caveat", "cursive"],
        "body": ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["120px", { lineHeight: "0.9", fontWeight: "700" }],
        "display-xl": ["80px", { lineHeight: "1.0", fontWeight: "700" }],
        "headline-lg": ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
      },
      spacing: {
        "gutter": "24px",
        "section_gap": "120px",
        "margin": "32px",
        "unit": "8px"
      },
      borderRadius: {
        "DEFAULT": "0px", // Sharp corners for the Armoured look
        "lg": "0px",
      }
    }
  },
  plugins: [],
}
