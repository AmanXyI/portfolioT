import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      sm: ".95rem",
      md: "1.1rem",
      lg: "1.5rem",
      xl: "2.5rem",
      xxl: "4rem",
    },
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "dark-indigo": "#4f46e5",
        "grey-text": "#69778b",
        "navy-blue": "#0f172a",
        shadow: "#69778b1c",
      },
      padding: {
        align: "14rem",
      },
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(360deg) translateX(1)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(90deg) translateX(-1000px)",
            opacity: "0",
          },
        },
      },
    },
  },
  // theme: {
  //   fontSize: {
  //     sm: ".95rem",
  //     md: "1.1rem",
  //     lg: "1.5rem",
  //     xl: "2.5rem",
  //     xxl: "4rem",
  //   },
  //   extend: {
  //     // backgroundImage: {
  //     //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //     //   "gradient-conic":
  //     //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     // },
  //     // fontFamily: {
  //     //   nunito: ["Nunito", "sans-serif"],
  //     // },
  //     colors: {
  //       "dark-indigo": "#4f46e5",
  //       "grey-text": "#69778b",
  //       "navy-blue": "#0f172a",
  //       shadow: "#69778b1c",
  //     },
  //     padding: {
  //       align: "14rem",
  //     },
  //     animation: {
  //       "meteor-effect": "meteor 5s linear infinite",
  //     },
  //     keyframes: {
  //       meteor: {
  //         "0%": { transform: "rotate(360deg) translateX(1)", opacity: "1" },
  //         "70%": { opacity: "1" },
  //         "100%": {
  //           transform: "rotate(90deg) translateX(-1000px)",
  //           opacity: "0",
  //         },
  //       },
  //     },
  //   },
  // },
  plugins: [],
};
export default config;
