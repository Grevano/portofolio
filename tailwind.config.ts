import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
theme: {
    extend: {
      colors: {
        "dark-blue-bg": "#0A192F",
        "primary-blue": "#3B82F6",
        "secondary-blue": "#1E3A8A",
        "accent-light-blue": "#60A5FA",
        "accent-teal": "#38BDF8",
        "text-light": "#E0F2FE",
      },
    },
  },
  plugins: [],
};
export default config;
