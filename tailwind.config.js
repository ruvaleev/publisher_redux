module.exports =
  {
    future: {},
    purge: [],
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
