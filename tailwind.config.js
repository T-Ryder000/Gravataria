/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Outros arquivos do diretório src, se houver
    "./views/**/*.ejs"      // Adicione os arquivos EJS da pasta views
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
