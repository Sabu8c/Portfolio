import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-primary": "var(--brand-primary)",
                "brand-amber": "var(--brand-amber)",
                "surface": "var(--surface)",
                "void": "var(--void)",
                "muted": "var(--muted)",
                "border-subtle": "var(--border-subtle)",
                "foreground": "var(--foreground)",
                "border-card": "var(--border-card)",
                "nav-bg": "var(--nav-bg)",
                "nav-icon": "var(--nav-icon)",
                "nav-icon-active": "var(--nav-icon-active)"
            },
            fontFamily: {
                sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
                mono: ["var(--font-geist-mono)", "monospace"],
            },
            animation: {
                "pulse-led": "pulse-led 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "scanner": "scanner 8s ease-in-out infinite",
                "bar1": "bar-anim 1.2s ease-in-out infinite",
                "bar2": "bar-anim 1.2s ease-in-out 0.1s infinite",
                "bar3": "bar-anim 1.2s ease-in-out 0.2s infinite",
                "bar4": "bar-anim 1.2s ease-in-out 0.3s infinite",
                "bar5": "bar-anim 1.2s ease-in-out 0.4s infinite",
                "bar6": "bar-anim 1.2s ease-in-out 0.5s infinite",
                "bar7": "bar-anim 1.2s ease-in-out 0.6s infinite",
                "bar8": "bar-anim 1.2s ease-in-out 0.7s infinite",
                "shimmer": "shimmer 2s ease-in-out infinite",
            },
            keyframes: {
                "pulse-led": {
                    "0%, 100%": { opacity: "1", boxShadow: "0 0 6px #FF4D00" },
                    "50%": { opacity: "0.3", boxShadow: "0 0 2px #FF4D00" },
                },
                "scanner": {
                    "0%": { transform: "translateY(-100%)", opacity: "0" },
                    "10%": { opacity: "1" },
                    "90%": { opacity: "1" },
                    "100%": { transform: "translateY(100vh)", opacity: "0" },
                },
                "bar-anim": {
                    "0%, 100%": { transform: "scaleY(0.2)" },
                    "50%": { transform: "scaleY(1)" },
                },
                "shimmer": {
                    "0%": { opacity: "0.5" },
                    "50%": { opacity: "1" },
                    "100%": { opacity: "0.5" },
                },
            },
            backgroundImage: {
                "grid-pattern":
                    "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                "grid-orange":
                    "linear-gradient(rgba(255,77,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,77,0,0.08) 1px, transparent 1px)",
            },
            backgroundSize: {
                "grid-sm": "40px 40px",
                "grid-md": "60px 60px",
            },
        },
    },
    plugins: [],
};

export default config;
