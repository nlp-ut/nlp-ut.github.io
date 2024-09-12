/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/pages/*.js'],
  theme: {
    extend: {
      colors:{
        "primary": {
          "50": "#e9e8ef",
          "100": "#d3d1e0",
          "200": "#a6a4c1",
          "300": "#7a76a1",
          "400": "#4d4982",
          "500": "#211b63",
          "600": "#1a164f",
          "700": "#14103b",
          "800": "#0d0b28",
        },    
      
    },
  },
  },
  plugins: [],
}

