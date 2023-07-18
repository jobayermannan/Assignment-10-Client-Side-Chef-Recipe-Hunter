// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode based on the class attribute
  theme: {
    extend: {
      colors: {
        // Define the colors for your themes
        light: {
          100: '#ffffff',
          200: '#f8f8f8',
          // Add more colors as needed
        },
        dark: {
          100: '#111111',
          200: '#0a0a0a',
          // Add more colors as needed
        },
        cupcake: {
          // Add colors for the "cupcake" theme
        },
        bumblebee: {
          // Add colors for the "bumblebee" theme
        },
        // Add colors for other themes as well
      },
    },
  },
  plugins: [require("daisyui")],
}


