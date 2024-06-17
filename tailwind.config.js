/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors :
      {
        primary : '#0872BF',
        background : '#141A1A'
      },
      backgroundImage :
      {
        close : "./photos/userAsset/close.png",
        menu : "./photos/stack/menu.png"
      }
    },
    fontFamily :
    {
      monstserrat: ['Monstserrat','sans-serif'],
      inter : ['Inter','sans-serif'],
      primary : ['Open Sans','sans-serif']
    }
  },
  plugins: [],
}

