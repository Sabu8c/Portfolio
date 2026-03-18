"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const [time, setTime] = useState("");

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const springX = useSpring(rawX, { stiffness: 40, damping: 20 });
    const springY = useSpring(rawY, { stiffness: 40, damping: 20 });
    const bgX = useTransform(springX, [-1, 1], ["-2%", "2%"]);
    const bgY = useTransform(springY, [-1, 1], ["-2%", "2%"]);

    useEffect(() => {
        const update = () => {
            setTime(
                new Date().toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    timeZone: "Europe/Zurich",
                })
            );
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        rawX.set(nx);
        rawY.set(ny);
    };

    return (
        <section
            id="hero"
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center"
        >
            {/* Parallax background image */}
            <motion.div
                className="absolute inset-[-4%] bg-cover bg-center will-change-transform"
                style={{
                    backgroundImage: "url('/mountains.jpg')",
                    x: bgX,
                    y: bgY,
                }}
            />

            {/* Dark/Light overlay */}
            <div
                className="absolute inset-0 transition-colors duration-300"
                style={{ backgroundColor: "var(--hero-overlay)" }}
            />

            {/* Grid pattern */}
            <div className="hero-grid absolute inset-0" />

            {/* Orange corner accent — top left */}
            <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-brand-orange to-transparent" />
            <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-brand-orange to-transparent" />
            {/* top right */}
            <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-brand-orange to-transparent" />
            <div className="absolute top-0 right-0 h-32 w-px bg-gradient-to-b from-brand-orange to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border"
                    style={{
                        borderColor: "rgba(255,77,0,0.3)",
                        background: "rgba(255,77,0,0.05)",
                    }}
                >
                    <span
                        className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse-led"
                        style={{ boxShadow: "0 0 6px #FF4D00" }}
                    />
                    <span className="font-mono text-xs tracking-widest text-brand-orange uppercase">
                        System Online — Portfolio v1.0
                    </span>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="font-sans font-black text-foreground leading-none tracking-[-0.04em] select-none"
                    style={{ fontSize: "clamp(2.5rem, 15vw, 10rem)" }}
                >
                    SACHA
                    <span className="block text-brand-orange" style={{ WebkitTextStroke: "2px #FF4D00", color: "transparent" }}>
                        BUMANN
                    </span>
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="font-mono text-muted text-xs sm:text-sm md:text-base tracking-widest uppercase mt-6 max-w-2xl px-4"
                >
                    Microengineering at EPFL{" "}
                    <span className="hidden sm:inline">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                    <span className="inline sm:hidden"><br /></span>
                    Founder of Yotta Technology SNC{" "}
                    <span className="hidden sm:inline">&nbsp;&nbsp;/&nbsp;&nbsp;</span>
                    <span className="inline sm:hidden"><br /></span>
                    Aerospace Enthusiast
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#vault"
                        className="px-6 py-2.5 bg-brand-orange text-background font-mono text-xs font-bold tracking-widest uppercase hover:bg-brand-amber transition-colors duration-200"
                    >
                        View Projects
                    </a>
                    <a
                        href="#terminal"
                        className="px-6 py-2.5 border text-foreground font-mono text-xs tracking-widest uppercase hover:border-brand-orange hover:text-brand-orange transition-colors duration-200"
                        style={{ borderColor: "var(--border-subtle)" }}
                    >
                        Contact
                    </a>
                </motion.div>
            </div>

            {/* Status Bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center sm:justify-between px-6 md:px-10 py-3 section-divider gap-4"
                style={{ background: "var(--status-bar-bg)", backdropFilter: "blur(10px)" }}
            >
                <span className="hidden sm:block font-mono text-[10px] md:text-xs text-muted tracking-widest uppercase">
                    LOC: EPFL Lausanne, CH
                </span>
                <span className="font-mono text-[10px] md:text-xs tracking-widest uppercase" style={{ color: "#4ade80" }}>
                    ◉ STATUS: ONLINE
                </span>
                <span className="hidden sm:block font-mono text-[10px] md:text-xs text-muted tracking-widest">
                    {time} CET
                </span>
            </motion.div>
        </section>
    );
}
