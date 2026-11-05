import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'system-ui', 'sans-serif'],
    },
    colors: {
      white: '#ffffff',
      black: '#1a1a1a', 
      gray: '#A9A6A6',
      red: '#AF1510',
      background: '#ffffff',
      foreground: '#1a1a1a',
      border: '#e5e7eb',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;