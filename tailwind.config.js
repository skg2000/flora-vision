/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50:  '#f0faf4',
          100: '#d8f3dc',
          200: '#b7e4c7',
          300: '#95d5b2',
          400: '#74c69d',
          500: '#52b788',
          600: '#40916c',
          700: '#2d6a4f',
          800: '#1b4332',
          900: '#081c15',
        },
        cream: '#faf7f2',
        sand:  '#f2ece3',
      },
      fontFamily: {
        sans:    ['Nunito', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(45,106,79,0.10)',
        'card-lg': '0 8px 40px rgba(45,106,79,0.14)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};


