import forms from '@tailwindcss/forms';
import aspectRadio from '@tailwindcss/aspect-ratio';
import typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
          raleway: ['Raleway',...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [forms,aspectRadio,typography],
};