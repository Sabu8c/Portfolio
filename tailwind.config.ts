/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:{
          10: '#ff7428',
          30: '#ff6628',
          50: '#ff5829',
          70: '#cc4620',
          90: '#993418',
        },
        secondary:{
          10: '#0aa0b1',
          30: '#087E8B',
          50: '#10527a',
          70: '#0B3954',
          90: '#051e2d',
        },
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          90: '#0a0b0d',
          80: '#15161a',
          50: '#1f2026',
          40: '#2a2d33',
          30: '#40444d',
          20: '#565b66',
          15: '#6c7380',
          10: '#adb9cc',
          5: '#c3d0e6',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};