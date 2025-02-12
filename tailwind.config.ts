/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      DEFAULT: "hsl(var(--background))",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          dark: "#000000", // Set background to black in dark mode
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "#000000", // Set primary background to black in dark mode
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          dark: "#000000", // Set secondary background to black in dark mode
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
          dark: "#000000", // Set destructive background to black in dark mode
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          dark: "#000000", // Set muted background to black in dark mode
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          dark: "#000000", // Set accent background to black in dark mode
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
          dark: "#000000", // Set popover background to black in dark mode
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
          dark: "#000000", // Set card background to black in dark mode
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scrollX: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" }
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
        "slide-in-bottom": "slide-in-bottom 0.5s ease-out forwards",
        scrollX: "scrollX var(--duration) linear infinite",
        scrollY: "scrollY var(--duration) linear infinite"
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.mask-horizontal': {
          maskImage: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          maskSize: 'cover',
          maskRepeat: 'no-repeat'
        },
        '.mask-vertical': {
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
          maskSize: 'cover',
          maskRepeat: 'no-repeat'
        },
        '.paused .animate-scrollX, .paused .animate-scrollY': {
          animationPlayState: 'paused !important'
        },
        '.reverse-x': {
          animationDirection: 'reverse',
          animationDelay: '-3s'
        }
      });
    }
  ],
}
