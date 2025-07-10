/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0F172A',
        auroraGreen: '#10B981',
        nebulaPink: '#EC4899',
        starlight: '#F3F4F6',
        magenta: '#8B5CF6',
        electricTeal: '#06B6D4',
      },
      fontFamily: {
        boom: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },

  plugins: [],
}

