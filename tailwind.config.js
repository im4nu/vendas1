/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'primary': ['DM Sans', 'sans-serif'],
      'secondary': ['Poppins', 'sans-serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'hero-car': "url('../pages/assets/images/hero-bg.png')",
        'about': "url('../pages/assets/images/about-bg.png')",
      },
      colors: {
        'primary-main': '#003057',
        'primary-default': '#1C5788',
        'primary-light': '#518CBC',
        'primary-lighter': '#84BBE9',

        'secondary-lighter': '#F3F6F8',
        'secondary-light': '#E6E6E6',
        'secondary-main': '#8C8C8C',
        'secondary-dark': '#252525',
      },
    },
  },
  plugins: [],
}
