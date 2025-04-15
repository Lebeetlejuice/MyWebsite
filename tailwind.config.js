/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'logo-test': "url('/src/assets/ordinateur.jpg')"
      }
    }
  },
  plugins: []
}
