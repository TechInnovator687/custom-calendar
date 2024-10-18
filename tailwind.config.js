/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulse: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-out',
        pulse: 'pulse 0.5s infinite alternate',
      },
      colors: {
        primary: {
          10: '#0b0049',
          20: '#20c997',
          30: '#ffdada',
          40: '#357abd',
          50: '#fce4ec',
          60: '#f8bbd0',
          70: '#c2185b',
          80: '#5a5a5a',
          90: '#17a678'
        }
      }
    },
  },
  plugins: [],
}

