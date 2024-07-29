/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add a new font family
        san1: ['Orbitron', 'system-ui', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'],
       
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#cce7f5',
          200: '#a2d5f2',
          300: '#7bc8f6',
          400: '#46b5e6',
          500: '#2196f3',
          600: '#1a8df5',
          700: '#147cd1',
          800: '#0f6aa6',
          900: '#055a8c',
        },
        secondary: {
          50: '#ffe7d9',
          100: '#ffd7be',
          200: '#ffc499',
          300: '#ffa07a',
          400: '#ff9900',
          500: '#ff8f00',
          600: '#ff7f00',
          700: '#ff6f00',
          800: '#ff5f00',
          900: '#ff3f00',
        },
        accent: {
          50: '#c5cae9',
          100: '#9fa8da',
          200: '#7986cb',
          300: '#5c6bc0',
          400: '#455a64',
          500: '#3498db',
          600: '#2e86c1',
          700: '#1a73e8',
          800: '#137cd1',
          900: '#0f6aa6',
        },
        neutral: {
          50: '#f7f7f7',
          100: '#e5e5e5',
          200: '#d3d3d3',
          300: '#c2c2c2',
          400: '#b1b1b1',
          500: '#a2a2a2',
          600: '#939393',
          700: '#808080',
          800: '#696969',
          900: '#555555',
        },
      },
    },
  },
  plugins: [
   
  ],
}