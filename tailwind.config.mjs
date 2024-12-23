/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': 'var(--border-radius)',
      DEFAULT: 'var(--border-radius)',
      'md': 'var(--border-radius)',
      'lg': 'var(--border-radius)',
      'full': '100px',
      'large': 'var(--border-radius)',
      'border_radius': 'var(--border-radius)',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border_radius: "var(--border-radius)",
        gray: "var(--gray)",
        accent: "var(--accent-color)",
        light_gray: "var(--light-gray)",
      },
      screens: {
        '2xl': '1072px',
      },
    },
  },
  plugins: [],
};

export default config;
