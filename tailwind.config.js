/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Arial Narrow"', 'Impact', 'sans-serif'],
      },
      colors: {
        ink: '#080a0c',
        panel: '#111417',
        line: '#292d30',
        accent: '#d7ff64',
      },
    },
  },
  plugins: [],
}