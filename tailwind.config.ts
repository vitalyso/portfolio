import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#FFEEEB",
          100: "#FFDDD6",
          200: "#FFBBAD",
          300: "#FF9D8A",
          400: "#FF7B61",
          500: "#FF5A38",
          600: "#FA2A00",
          700: "#BD1F00",
          800: "#7A1400",
          900: "#3D0A00",
          950: "#1F0500",
        },
      },
    },
  },
  plugins: [],
};
export default config;
