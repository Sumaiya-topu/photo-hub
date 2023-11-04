const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px",
        xs: "468px",
        sm: "550px",
        md: "868px",
        lg: "974px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
});
