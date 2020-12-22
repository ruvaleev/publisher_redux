module.exports =
  {
    future: {},
    purge: {
      mode: 'layers',
      layers: ['components', 'utilities'],
      content: ['./src/**/*.js']
    },
    theme: {
      extend: {
        padding: {
          '30vh': '30vh'
        } 
      },
    },
    plugins: [
      require("tailwindcss"),
      require("autoprefixer"),
      require("@tailwindcss/ui"),
    ],
  };
