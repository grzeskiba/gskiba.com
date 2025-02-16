import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFFFF', // Pure white
          100: '#F5F5F5', // Very light gray
          200: '#E5E5E5', // Light gray
          300: '#D4D4D4', // Gray
          400: '#A3A3A3', // Medium gray
          500: '#737373', // Dark gray
          600: '#525252', // Darker gray
          700: '#404040', // Very dark gray
          800: '#262626', // Nearly black
          900: '#000000', // Pure black
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
