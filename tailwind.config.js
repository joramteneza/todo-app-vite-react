/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#4CAF50", // Your preferred green shade
        customBeige: "#F5F5DC", // Your preferred beige shade
        customBlue: "#00BFFF", // Add another vibrant color if needed
      },
    },
  },
  plugins: [],
};
