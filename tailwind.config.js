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
      fontFamily: {
        'main-font': ['"Ubuntu"'],
        'main-font': ['"Ubuntu"'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.4' }],
        'sm': ['0.875rem', { lineHeight: '1.4' }],
        'base': ['1rem', { lineHeight: '1.4' }],
        'lg': ['1.125rem', { lineHeight: '1.4' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.4' }],
        '4xl': ['2.25rem', { lineHeight: '1.4' }],
        '5xl': ['3rem', { lineHeight: '1.4' }],
        '6xl': ['3.75rem', { lineHeight: '1.4' }],
        '7xl': ['4.5rem', { lineHeight: '1.4' }],
        '8xl': ['6rem', { lineHeight: '1.4' }],
        '9xl': ['8rem', { lineHeight: '1.4' }],
      },
      colors: {
        whiteFull: "#ffffff",
        white: "#EFF7FB",
        black: "#0D0D1C",
        primary: { // azul oscuro
          DEFAULT: "#24234C",
          // 900: "#3302BF",
          // 800: "#4507C9",
          // 700: "#4F1BE4",
          // 600: "#5441FF",
          // 500: "#6E76FF",
          // 400: "#97A7FF",
          // 300: "#BECAFF",
          // 200: "#DBE2FF",
          // 100: "#EBF0FF",
          // 50: "#F5F8FF",
        },
        secondary: { // azul claro
          DEFAULT: "#9CD7F5",
          // 900: "#3302BF",
          // 800: "#4507C9",
          // 700: "#4F1BE4",
          // 600: "#5441FF",
          // 500: "#6E76FF",
          // 400: "#97A7FF",
          // 300: "#BECAFF",
          // 200: "#DBE2FF",
          // 100: "#EBF0FF",
          // 50: "#F5F8FF",
        },
        accent: { // morado
          DEFAULT: "#62388E",
          // 300: "#FF9900",
          // 200: "#FFBD1B",
          // 100: "#FFE685",
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