/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark-brown": "#1A0D01",
        "custom-linkedin-brown": "#994C09",
        "custom-github-green": "#869909",
      },
        fontFamily: {
            inter: ["Inter", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

