export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#d82b2bff', 
        'dark-gray-2': '#A9A9A9', 
      },
    },
  },
  plugins: [],
}
