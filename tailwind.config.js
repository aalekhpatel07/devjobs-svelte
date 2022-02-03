module.exports = {
  plugins: [require("@tailwindcss/typography")],
  content: ["./src/**/*.{svelte,ts}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        violet: "#5964e0",
        "transparent-violet": "rgba(89,100,224,0.1)",
        "transparent-violet-dark": "rgba(89,100,224,0.351)",
        "very-dark-blue": "#19202d",
        "light-violet": "#939bf4",
        midnight: "#121721",
        white: "#ffffff",
        "light-grey": "#f4f6f8",
        grey: "#9daec2",
        "dark-grey": "#6e8098",
        debug: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#dfa4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
      },
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      lineHeight: {
        h1: "2.125rem",
        h2: "1.8125rem",
        h3: "1.5rem",
        h4: "1.125rem",
        body: "1.625rem",
      },
      fontSize: {
        h1: "1.75rem",
        h2: "1.5rem",
        h3: "1.25rem",
        h4: "0.875rem",
        body: "1rem",
      },
      backgroundImage: {
        "pattern-header-desktop":
          'url("/assets/home/bg-pattern-header-desktop.svg")',
        "pattern-header-mobile":
          'url("/assets/home/bg-pattern-header-mobile.svg")',
      },
    },
  },
};
