/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // Enables dark mode via a CSS class
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // All your React files
  ],
  theme: {
  extend: {
    boxShadow: {
      'soft': '0 4px 14px rgba(0, 0, 0, 0.1)',
    },
    transitionTimingFunction: {
      'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
    },
  },
},
plugins: [require('tailwindcss-pseudo-elements')],
variants: {
  extend: {
    backgroundColor: ['before', 'hover', 'group-hover'],
    scale: ['hover', 'group-hover', 'before'],
    left: ['hover', 'before'],
    width: ['hover', 'before'],
  },
},
}
