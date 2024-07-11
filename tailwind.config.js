/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css,scss,sass}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'main-font': ['"Archivo"'],
      },
      colors: {
        primary: {
          DEFAULT: "#5441FF",
          900: "#3302BF",
          800: "#4507C9",
          700: "#4F1BE4",
          600: "#5441FF",
          500: "#6E76FF",
          400: "#97A7FF",
          300: "#BECAFF",
          200: "#DBE2FF",
          100: "#EBF0FF",
          50: "#F5F8FF",
        },
        secondary: {
          DEFAULT: "#393D49",
        },
        accent: {
          DEFAULT: "#00ff00",
          300: "#FF9900",
          200: "#FFBD1B",
          100: "#FFE685",
        },
      },
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
    }
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};

// export default config;