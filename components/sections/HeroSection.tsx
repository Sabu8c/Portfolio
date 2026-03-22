"use client";

import { useRef, useEffect, useState } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

const BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function HeroSection() {
    const ref = useRef<HTMLElement>(null);
    const [time, setTime] = useState("");

    /* ── random background image (mountains1–10) — client-only to avoid hydration mismatch ── */
    const [bgImage, setBgImage] = useState("/mountains1.jpg");
    useEffect(() => {
        const index = Math.floor(Math.random() * 10) + 1;
        setBgImage(`/mountains${index}.jpg`);
    }, []);

    /* ── mouse parallax ── */
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const springX = useSpring(rawX, { stiffness: 0, damping: 10 });
    const springY = useSpring(rawY, { stiffness: 0, damping: 10 });
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
            {/* Parallax background image — random mountain */}
            <motion.div
                className="absolute inset-[-4%] bg-cover bg-center will-change-transform"
                style={{
                    backgroundImage: `url('${bgImage}')`,
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
            <div className="absolute top-0 left-0 w-32 h-px bg-gradient-to-r from-brand-primary to-transparent" />
            <div className="absolute top-0 left-0 h-32 w-px bg-gradient-to-b from-brand-primary to-transparent" />
            {/* top right */}
            <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-brand-primary to-transparent" />
            <div className="absolute top-0 right-0 h-32 w-px bg-gradient-to-b from-brand-primary to-transparent" />

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
                        className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse-led"
                        style={{ boxShadow: "0 0 6px #FF4D00" }}
                    />
                    <span className="font-mono text-xs tracking-widest text-brand-primary uppercase">
                        MY Portfolio v1.2
                    </span>
                </motion.div>

                {/* Name — clean fade-up */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: BEZIER }}
                    className="font-sans font-black text-foreground leading-none tracking-[-0.04em] select-none"
                    style={{ fontSize: "clamp(2.5rem, 15vw, 10rem)" }}
                >
                    SACHA
                    <span className="block" style={{ WebkitTextStroke: "2px #FF4D00", color: "transparent" }}>
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
                    Student @EPFL{" "}
                    <span className="hidden sm:inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                    <span className="inline sm:hidden"><br /></span>
                    Cofounder of Yotta Technology SNC{" "}
                </motion.p>

                {/* CTA — scale-in */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6, ease: BEZIER }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <motion.a
                        href="#vault"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ ease: BEZIER }}
                        className="px-6 py-2.5 bg-brand-primary text-background font-mono text-xs font-bold tracking-widest uppercase hover:bg-brand-amber transition-colors duration-200"
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#terminal"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ ease: BEZIER }}
                        className="px-6 py-2.5 border text-foreground font-mono text-xs tracking-widest uppercase hover:border-brand-primary hover:text-brand-primary transition-colors duration-200"
                        style={{ borderColor: "var(--border-subtle)" }}
                    >
                        Contact
                    </motion.a>
                </motion.div>
            </div>

            {/* Status Bar */}
            <motion.div
                /*
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                */
                className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center sm:justify-between px-6 md:px-10 py-3 section-divider gap-4"
                style={{ background: "var(--status-bar-bg)", backdropFilter: "blur(10px)" }}
            >
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
