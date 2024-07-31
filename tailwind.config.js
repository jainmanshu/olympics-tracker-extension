/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-scrollbar::-webkit-scrollbar": {
          width: "10px",
        },
        ".custom-scrollbar::-webkit-scrollbar-track": {
          background: "#1f2937",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb": {
          background: "#4b5563",
          borderRadius: "5px",
        },
        ".custom-scrollbar::-webkit-scrollbar-thumb:hover": {
          background: "#6b7280",
        },
        ".custom-scrollbar": {
          "scrollbar-width": "thin",
          "scrollbar-color": "#4b5563 #1f2937",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
