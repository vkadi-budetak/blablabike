/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1070px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/assets/mobile-bg.png')",
        "hero-tablet": "url('/assets/tablet-bg.png')",
        "hero-lg": "url('/assets/bg-image.png')",
      },
    },
  },
  plugins: [],
};
