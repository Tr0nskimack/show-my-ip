/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#555557",
        cardgrande: "#26282a",
        cardinf: "#1e1e1e",
        letracardgrande: "#7e8081",
        textoblanco: "#fefefe"
      }
    },
  },
  plugins: [],
}