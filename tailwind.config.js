/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlues: '#6474ff',
        customBlue: 'rgba(30, 144, 255, 0.6)',
        primarycolor:"#323232",
        customgray: '#E7E9E9',
        background: "var(--background)",
        foreground: "var(--foreground)",
        bordercolor:"hsla(0,0%,100%,.6)",
      },
      gradientColorStops: {
        customBlue: '#6474ff',
      },
      backdropBlur: {
        'extra': '15px',
      },
      fontSize: {
        'custom-5px': '0.3125rem',
        'custom-10px': '0.625rem',
        'custom-12.5px':'0.78125rem',
        'custom-15px': '0.9375rem',
        'custom-20px': '1.25rem',
        'custom-30px': '1.875rem',
        'custom-40px': '3.125rem',
        'custom-50px': '5.625rem',
        'custom-90px': '6.25rem',
        'custom-100px': '9.375rem',
        'custom-150px': '12.5rem',
      },
      fontFamily: {
        sans: [
          'BaseNeue',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
      },
    },
  },
  plugins: [],
};
