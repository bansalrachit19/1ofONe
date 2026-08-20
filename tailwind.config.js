/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: "#060911",
          900: "#0a0f1d",
          850: "#0d1424",
          800: "#111a30",
          700: "#182442",
          600: "#22325c",
        },
        surface: {
          base: "#0c1222",
          card: "rgba(15, 23, 42, 0.75)",
          hover: "rgba(30, 41, 59, 0.8)",
          active: "rgba(51, 65, 85, 0.9)",
          glass: "rgba(255, 255, 255, 0.03)",
        },
        accent: {
          cyan: "#38bdf8",
          emerald: "#10b981",
          indigo: "#818cf8",
          violet: "#a78bfa",
          rose: "#fb7185",
          amber: "#fbbf24",
        }
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 0 30px -5px rgba(56, 189, 248, 0.25)",
        "glow-emerald": "0 0 30px -5px rgba(16, 185, 129, 0.25)",
        "glow-indigo": "0 0 30px -5px rgba(129, 140, 248, 0.25)",
        "glass-subtle": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "inner-light": "inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
