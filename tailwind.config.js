/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'adelie': {
          navy: '#223243',
          'navy-light': '#2d4358',
          'navy-dark': '#1a2733',
          green: '#1fae5c',
          'green-light': '#25c96a',
          'green-dark': '#189a4e',
          'green-50': '#edfdf3',
          'green-100': '#d4f9e2',
          'green-200': '#a8f2c5',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

