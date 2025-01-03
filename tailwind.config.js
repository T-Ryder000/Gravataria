/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.js', // ou onde os arquivos JS estão localizados
    './views/**/*.ejs', // ou onde seus arquivos EJS estão localizados
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
