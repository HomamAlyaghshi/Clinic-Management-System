module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['"Cairo"', "sans-serif"],
        english: ['"Poppins"', "sans-serif"],
      },
      colors: {
        primary: "#4F46E5", // الأزرق البنفسجي
        secondary: "#EC4899", // الوردي
        lightBg: "#F9FAFB", // خلفية فاتحة
        darkBg: "#1F2937", // خلفية داكنة
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        clinicLight: {
          primary: "#4F46E5",
          secondary: "#EC4899",
          accent: "#22D3EE",
          neutral: "#3D4451",
          "base-100": "#F9FAFB",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      {
        clinicDark: {
          primary: "#4F46E5",
          secondary: "#EC4899",
          accent: "#22D3EE",
          neutral: "#3D4451",
          "base-100": "#1F2937",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkTheme: "clinicDark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
