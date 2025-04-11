

// ✅ FIXED: custom screens defined at the correct level
module.exports = {
  theme: {
    // screens should be directly under theme, NOT inside extend
    screens: {
      mo: "425px",
      la: "1024px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        custom: ["YourCustomFont", "sans-serif"],
      },
      // You can still extend other things here
    },
  },
};
