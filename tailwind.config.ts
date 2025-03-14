import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#873E96",
        secondary: "#6C5CE7",
        tertiary: "#EDB31E",
        accent1: "#FF725E",
        accent2: "#FF9FB1",
        accent3: "#FEF0D5",
        accent4: "#DFE3FE",
        anounceTag: "#434147",
        text: "#1C1A1F",
        "button/fillpressed": "#EBE1ED",
        "button/pressed": "#4D1F57",
        "button/hover":"#B664C7",
        "subtle-text": "#929095",
        "subtle-body-text": "#A9A9A9",
      },
    },
  },
  plugins: [],
} satisfies Config;
