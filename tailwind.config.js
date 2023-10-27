/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Orbitron': ['Orbitron', 'sans-serif']
      
    }
  },
  plugins: [require("daisyui")],
}



