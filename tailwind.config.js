/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'Arial', 'Helvetica', 'sans-serif'],
        serif: ['Lora', 'Times New Roman', 'Times', 'serif'],
        mono: ['Kode Mono', 'Courier New', 'Courier', 'monospace'],
      }
    },
  },
  plugins: [],
}

