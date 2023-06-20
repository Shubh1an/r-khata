/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js",
  "./node_modules/flowbite-react/**/*.js",],
  theme: {
    extend: {
      flex:{
        "0.5":'0.5 1 1'
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        '250': 'repeat(auto-fit, minmax(29%, 1fr))',
        '78':'repeat(4, minmax(78px, 1fr))',
        '78-auto':'repeat(auto-fit, minmax(78px, 1fr))',
        '492':'repeat(3, minmax(390px, 1fr))',
        '492-auto':'repeat(auto-fit, minmax(492px, 1fr))',
        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      colors: {
        "header-button": "linear-gradient(84.66deg, #1A87EF -50.59%, #7347FF 137.35%)",
        "banner-info": "#235B7B",
        "banner-error": "#B20000",
        "banner-success": "#096231",
        "btn-primary":"#004086",
        "active-link":"#1A87EF",
        "text-black":"#030522",
        "card-bg":"#7347FF", 
        "text-slaty":"#616576",
        "footer-bg":" linear-gradient(0deg, #FFFFFF, #FFFFFF),linear-gradient(0deg, #EBF3FA, #EBF3FA)",
        "bg-card-grey":"#F8F8F8",
        "bg-grey":"#F4FAFF",
        "black-shade":"#181818",
        "blue-dark":"rgba(7, 68, 100, 1)",
        "input-bg":"rgba(244, 250, 255, 1)",
        "membio": {
          "main": "#48576A",
          "header": "#29323D",
          "accent": "#EFF2F7",
          "accent-200": "#F9FAFC",
          "border": "#D3DCE6",
          "base-grey":'#E2E2E2'
        },
      },
      fontSize:{
       
          "xxs":"0.625rem"
        
      }
    },
  },
  plugins: [],
}

