import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1700px',
    },

    extend: {
      screens: {
        'xs': {'min': '10px', 'max': '576px'},
      },
      fontFamily: {
        "buenos-aires": ["Buenos Aires", "sans-serif"],
        "buenos-airesLight": ["Buenos Aires Light", "sans-serif"],
        "buenos-airesBold": ["Buenos Aires Bold", "sans-serif"],
        "nunito-sans": ["var(--font-nunito)"],
        "roboto-imp": ["var(--font-roboto)"],
        "inter-400": ["var(--font-inter)"],
        "poppins": ["var(--font-poppins)"],
      },
     
    },
  },
  plugins: [],
}
export default config
