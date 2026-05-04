import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0065CA",
          foreground: "#FFFFFF",
          50: "#e6f0fa",
          100: "#cce0f5",
          200: "#99c1eb",
          300: "#66a3e0",
          400: "#3384d6",
          500: "#0065CA",
          600: "#0052a3",
          700: "#003e7a",
          800: "#002952",
          900: "#001529",
        },
        accent: {
          DEFAULT: "#F97316",
          foreground: "#FFFFFF",
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#F97316",
          600: "#ea6c0a",
          700: "#c2520a",
          800: "#9a4010",
          900: "#7c3410",
        },
        background: "#F8FAFC",
        dark: {
          DEFAULT: "#0d1117",
          2: "#161b22",
          3: "#21262d",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "8px",
      },
      spacing: {
        18: "4.5rem",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0065CA 0%, #0052a3 100%)",
        "gradient-accent": "linear-gradient(135deg, #F97316 0%, #ea6c0a 100%)",
        "gradient-dark": "linear-gradient(135deg, #0d1117 0%, #161b22 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
