"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, Cpu, Music2, Terminal, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_ITEMS = [
    { id: "hero", icon: Home, label: "Home" },
    { id: "status", icon: Briefcase, label: "Status" },
    { id: "vault", icon: Cpu, label: "Vault" },
    //{ id: "frequency", icon: Music2, label: "Frequency" },
    { id: "terminal", icon: Terminal, label: "Terminal" },
];

export default function NavDock() {
    const [active, setActive] = useState("hero");
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActive(id);
                },
                { threshold: 0.4 }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            initial={{ y: 40, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 25 }}
            className="fixed bottom-4 sm:bottom-6 left-1/2 z-[9998] flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-border-subtle shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-nav-bg backdrop-blur-[20px]"
        >
            {NAV_ITEMS.map(({ id, icon: Icon, label }) => {
                const isActive = active === id;
                return (
                    <button
                        key={id}
                        onClick={() => scrollTo(id)}
                        title={label}
                        aria-label={label}
                        className={`
                            relative group flex flex-col items-center justify-center 
                            w-9 h-9 sm:w-10 sm:h-10 rounded-full 
                            transition-all duration-200
                            ${isActive
                                ? "bg-[rgba(255,77,0,0.12)]"
                                : "bg-transparent hover:bg-gray-100 dark:hover:bg-white/10"
                            }
    `}
                    >
                        <Icon
                            size={18}
                            strokeWidth={1.25}
                            className="transition-colors duration-200"
                            style={{ color: isActive ? "var(--nav-icon-active)" : "var(--nav-icon)" }}
                        />
                        {isActive && (
                            <motion.div
                                layoutId="nav-indicator"
                                className="absolute bottom-1 w-1 h-1 rounded-full bg-brand-primary"
                                transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            />
                        )}
                    </button>
                );
            })}

            {/* Theme Toggle */}
            <div className="w-px h-6 bg-border-subtle mx-1" />
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-colors duration-200 hover:bg-[rgba(255,77,0,0.12)] text-nav-icon hover:text-brand-primary"
                aria-label="Toggle Theme"
            >
                {mounted && theme === "dark" ? (
                    <Sun size={18} strokeWidth={1.25} />
                ) : (
                    <Moon size={18} strokeWidth={1.25} />
                )}
            </button>
        </motion.nav>
    );
}
