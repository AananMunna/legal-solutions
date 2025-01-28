/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: '#1E40AF', // Example primary color (blue-800)
        },
        fontFamily: {
          primary: ['Poppins', 'sans-serif'], // Example font
        },
      },
    },
    plugins: [],
  };
  