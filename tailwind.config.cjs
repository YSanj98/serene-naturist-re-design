/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { 
        "primary-500": "#272330",
        "primary-100" : "#301c6c",

       },
      fontFamily: {
        serif: ["Georgia"],
        poppins: ["Poppins", "sans-serif"],
      },
    },

    screens: {
      xs: {'max': '640px'},
      // => @media (max-width: 640px) { ... }

      sm: {'max': '767px'},
      // => @media (max-width: 767px) { ... }
  
      md: {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
  
      lg: {'min': '1024px'},
      // => @media (max-width: 1279px) { ... }
  
    
    }
  },
  plugins: [require("daisyui")],
};
