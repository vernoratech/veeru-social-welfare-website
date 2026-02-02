/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary NGO color palette
        navy: {
          50: '#e6eaf0',
          100: '#c2cdd9',
          200: '#9aafc2',
          300: '#7291ab',
          400: '#547b99',
          500: '#366587',
          600: '#2f5a7a',
          700: '#264a68',
          800: '#1e3a5f', // Primary navy - trust, credibility
          900: '#122540',
        },
        forest: {
          50: '#e8f3ed',
          100: '#c5e1d2',
          200: '#9fcdb5',
          300: '#78b997',
          400: '#5aa981',
          500: '#3d996b',
          600: '#358c62',
          700: '#2d7a4f', // Primary green - growth, hope
          800: '#256942',
          900: '#194a2e',
        },
        warmth: {
          50: '#fef3e2',
          100: '#fce0b5',
          200: '#face85',
          300: '#f8ba54',
          400: '#f6ab2f',
          500: '#f49c0a',
          600: '#ea8f06',
          700: '#d97706', // Primary orange - action, warmth
          800: '#c96204',
          900: '#ac4200',
        },
        calm: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa', // Soft blue - balance, calm
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [],
}
