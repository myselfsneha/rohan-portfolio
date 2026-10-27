
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#171812",
        charcoal: "#22231D",
        olive: "#77795A",
        "olive-light": "#A4A582",
        cream: "#F0EBDD",
        muted: "#B7B3A5",
        clay: "#A66F52",
        "line-soft": "rgba(240, 235, 221, 0.16)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
        editorial: ["Cormorant Garamond", "serif"],
        mono: ["monospace"],
      },

      maxWidth: {
        editorial: "1440px",
      },

      letterSpacing: {
        "editorial": "-0.055em",
        "wide-caps": "0.18em",
      },

      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      transitionDuration: {
        600: "600ms",
        800: "800ms",
      },

      animation: {
        "fade-up": "fadeUp 800ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "soft-reveal": "softReveal 1s ease-out both",
      },

      keyframes: {
        fadeUp: {
          from: {
            opacity: "0",
            transform: "translateY(24px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        softReveal: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },

  plugins: [],
};
