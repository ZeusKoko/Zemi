/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-midnight': '#0F172A',
        'brand-indigo': '#1E293B',
        'brand-purple': '#7C3AED',
        'brand-cyan': '#22D3EE',
        'brand-white': '#F8FAFC',
      },
    },
  },
  plugins: [],
}

