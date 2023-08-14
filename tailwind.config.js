/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbar': '0px 2px 20px 0px rgba(0, 0, 0, 0.36)',
      },
      textShadow: {
        "navbar": ' 3px 8px 11px rgba(0, 0, 0, 0.50);',
      },
      fontSize: {
        '12xl': '12', 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    
  ],
}
