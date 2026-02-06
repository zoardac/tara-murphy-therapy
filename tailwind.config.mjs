/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blush: '#d4a5a5',
        'blue-black': '#1a2332',
        olive: '#6b7c5d',
        'gray-blue': '#7a8b9e',
        cream: '#f5f1ed',
        fog: '#e8e4df',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        body: ['Quattrocento', 'serif'],
      },
    },
  },
  plugins: [],
}
