/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'logo-test': "url('/src/assets/ordinateur.jpg')"
      },
      fontFamily: {
        futura: ['Futura', 'sans-serif'] // Ajoute Futura ici
      }
    }
  },
  plugins: []
}
