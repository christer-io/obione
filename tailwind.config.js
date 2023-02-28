/* const colors = require('tailwindcss/colors')
console.log('colors', colors.blue)
*/
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./public/**/*.html",
    
  ],
  safelist: [
    'text-blue',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      "blue": '#4D8FE4',
      "bluec": '#4D8FE4',
      "blueprimary": "#3F51B5",
      "purple": "#524DCC",
      "midblue": "#3E7CB1",
      "orange": "#914c05",
      "red": "#910549",
      'buttonblue': '#4267B2',
      'darkblue': '#303F9F',
      'darkdarkblue': '#054A91',
      'maxdarkblue': '#061629',
      'midnight': '#121063',
      'gray': '#808080',
      'grayish': '#6F7E8C', 
      "darkgray": "#161E33",
      'lightgray': '#E5E5E5',
      'lightlightgray': '#fafafa',
      'green': '#4CAF50',
      'darkgreen': '#4a9105',
      "mono": "#32404e",
      'darkgreen2': '#4F772D',
      "darkestgreen": "#132A13",
      "black": "#000000",
      "purple": "#373050",
      "hover": "#4D8FE4",
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
    
}

