/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#A3E635", // bg-lime-400
          secondary: "#e7e5e4", // bg-stone-100
          accent: "#fecaca", // bg-red-400 (for strong accents)
          neutral: "#d9f99d", // bg-lime-200
          "base-100": "#ffffff", // Base background color
          info: "#1E3A8A", //
          success: "#4ade80", // Customize success color
          warning: "#facc15", // Customize warning color
          error: "#ef4444", // bg-red-400 (for CTAs)

          // Button styles

          "background-primary": "#fafaf9",
          "button-primary": "#fb7185", // Same as primary background with text color gray-700
          "button-secondary": "#e7e5e4", // Same as secondary background with text color gray-500
          "primary-content": "#6772E5", // text-gray-700
          "secondary-content": "#6b7280", // text-gray-500
        },
      },
    ],
  },
};
