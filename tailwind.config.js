module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  screens: {
    pc: '768px',
  },
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@media (min-width: 768px)': {
            maxWidth: '768px',
          },
        },
      });
    },
    require('daisyui'),
  ],
  daisyui: {
    themes: ['winter'],
  },
};
