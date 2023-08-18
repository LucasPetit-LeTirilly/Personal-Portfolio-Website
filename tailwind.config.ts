import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "brown-header": "#76453F",
        "brown-footer": "#765954",
        grey: "#D9D9D9",
        "light-brown": "#BC6933",
        beige: "#EAE2D7",
      },
    },
    fontFamily: {
      koho: ["Koho", "sans-serif"],
      mainTitle: ["Cormorant", "serif"],
      heading: ["Cormorant SC", "serif"],
    },
  },
  plugins: [],
};
export default config;
