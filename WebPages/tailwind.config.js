darkMode: 'class'

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
    // other paths where you use Tailwind classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
