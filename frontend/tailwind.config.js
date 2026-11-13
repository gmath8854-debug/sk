/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#FC3C1E',
          redDeep: '#C62828',
          gold: '#FD9B00',
          goldLight: '#F8D978',
          cream: '#FFF8ED',
          creamSoft: '#FFEFCB',
          beige: '#F5EBDD',
          dark: '#191919',
          muted: '#5F5F5F',
        },
        corporate: {
          greenDark: '#12281C',
          greenPrimary: '#1F513D',
          beige: '#F1DDC0',
          beigeLight: '#F5EBDD',
          goldMuted: '#C8A96B',
        },
        studio: {
          sage: '#8E986D',
          paper: '#F9F6F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(25, 25, 25, 0.07)',
        'luxury-hover': '0 30px 60px -12px rgba(252, 60, 30, 0.12)',
        'corp': '0 20px 40px -15px rgba(18, 40, 28, 0.12)',
      }
    },
  },
  plugins: [],
}
