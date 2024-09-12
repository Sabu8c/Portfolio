/** @type {import('tailwindcss').Config} */

function generatePrimaryColors(hue: number, saturation: number, lightnessSteps: number[]) {
  return lightnessSteps.reduce((colors, lightness, index) => {
    colors[index * 100] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    return colors;
  }, {} as Record<number, string>);
}

module.exports = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: generatePrimaryColors(241, 73, [95, 90, 80, 70, 60, 50, 40, 30, 20, 10]),
        secondary: generatePrimaryColors(270, 73, [95, 90, 80, 70, 60, 50, 40, 30, 20, 10]),
        gray: generatePrimaryColors(122, 0, [95, 90, 80, 70, 60, 50, 40, 30, 20, 10]),
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