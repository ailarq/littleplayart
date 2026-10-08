/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fbebf5',
          200: '#f6d5e8',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
