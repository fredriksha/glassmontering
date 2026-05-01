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
        navy: '#223243',
        ink: '#1A2330',
        paper: '#FBFBF9',
        stone: '#F3F3EF',
        glass: {
          DEFAULT: '#1FAE5C',
          dark: '#189A4E',
          light: '#25C96A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        brand: '0.18em',
        'brand-tight': '0.12em',
      },
    },
  },
  plugins: [],
}
