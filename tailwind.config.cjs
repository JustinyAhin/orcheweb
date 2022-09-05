/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    theme: {
      fontFamily: {
        "work-sans": ["Work Sans", "sans-serif"],
      },
      colors: {
        "jungle-green": "#092327",
        "light-cyan": "#D7F9F1",
        "ruby-red": "#9B1D20",
        blue: {
          600: "#2563EB",
        },
        gray: {
          400: "#9CA3AF",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
        },
        white: "#FFFFFF",
      },
      extend: {
        boxShadow: {
          default: "6px 6px 0 0 rgba(215, 249, 241, .25)",
          dark: "6px 6px 0 0 rgba(9, 35, 39, .25)",
        },
      },
    },
  },
  plugins: [],
};
