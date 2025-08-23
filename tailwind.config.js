/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kabuki-red': '#DC2626',
        'kabuki-gold': '#F59E0B',
        'kabuki-dark': '#1F2937',
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        kabuki: {
          "primary": "#DC2626",
          "secondary": "#F59E0B",
          "accent": "#1F2937",
          "neutral": "#374151",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}
