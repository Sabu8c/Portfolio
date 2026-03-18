"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, ExternalLink } from "lucide-react";

const socials = [
    {
        id: "github",
        icon: Github,
        label: "GitHub",
        handle: "@sachab",
        href: "https://github.com",
        sublabel: "Code & Projects",
    },
    {
        id: "linkedin",
        icon: Linkedin,
        label: "LinkedIn",
        handle: "Sacha Bumann",
        href: "https://linkedin.com",
        sublabel: "Professional Network",
    },
    {
        id: "instagram",
        icon: Instagram,
        label: "Instagram",
        handle: "@sacha.bumann",
        href: "https://instagram.com",
        sublabel: "Visual Diary",
    },
    {
        id: "tiktok",
        icon: Youtube,
        label: "TikTok",
        handle: "@sachab",
        href: "https://tiktok.com",
        sublabel: "Short Form Content",
    },
];

export default function TerminalSection() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const isAnyHovered = hoveredId !== null;

    return (
        <section
            id="terminal"
            className="relative min-h-screen flex flex-col section-divider overflow-hidden transition-colors duration-300"
            style={{ background: "var(--void)" }}
        >
            {/* Orange flash background */}
            <AnimatePresence>
                {isAnyHovered && (
                    <motion.div
                        key="flash"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(255,77,0,0.08) 0%, transparent 70%)",
                        }}
                    />
                )}
            </AnimatePresence>

            <div className="flex-1 px-4 sm:px-6 md:px-10 py-24 sm:py-32 md:py-48 flex flex-col max-w-6xl mx-auto w-full">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 mb-12"
                >
                    <div className="h-px flex-1 max-w-8" style={{ background: "#FF4D00" }} />
                    <span className="font-mono text-xs text-brand-orange tracking-widest uppercase">
                        Section 05 // Terminal
                    </span>
                    <div className="h-px flex-1" style={{ background: "var(--border-subtle)" }} />
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2
                        className="font-sans font-black text-foreground tracking-tight leading-none mb-4"
                        style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)" }}
                    >
                        ESTABLISH
                        <br />
                        <span
                            className="text-brand-orange"
                            style={{ WebkitTextStroke: "2px #FF4D00", color: "transparent" }}
                        >
                            CONNECTION
                        </span>
                    </h2>
                    <p className="font-mono text-muted text-sm max-w-md">
                        All channels open. Select a protocol below to initiate contact or
                        explore my work across platforms.
                    </p>
                </motion.div>

                {/* Social links */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {socials.map((s, i) => {
                        const isHovered = hoveredId === s.id;
                        return (
                            <motion.a
                                key={s.id}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                onMouseEnter={() => setHoveredId(s.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                style={{
                                    background: isHovered ? "#FF4D00" : "var(--card-bg)",
                                    border: `0.5px solid ${isHovered ? "#FF4D00" : "var(--border-subtle)"}`,
                                    transition: "background 0.15s ease, border-color 0.15s ease",
                                }}
                                className="relative group flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-3 md:gap-5 p-4 md:p-5 rounded-sm overflow-hidden"
                            >
                                {/* Arrow indicator */}
                                <div
                                    className="absolute right-5 top-1/2 -translate-y-1/2 transition-all duration-200"
                                    style={{ color: isHovered ? "#000000" : "var(--muted)" }}
                                >
                                    <ExternalLink size={14} strokeWidth={1.25} />
                                </div>

                                {/* Icon */}
                                <div
                                    className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-sm flex items-center justify-center self-start sm:self-auto"
                                    style={{
                                        background: isHovered ? "rgba(0,0,0,0.15)" : "rgba(255,77,0,0.08)",
                                        border: `0.5px solid ${isHovered ? "rgba(0,0,0,0.2)" : "rgba(255,77,0,0.2)"}`,
                                    }}
                                >
                                    <s.icon
                                        size={18}
                                        strokeWidth={1.25}
                                        style={{ color: isHovered ? "#000000" : "#FF4D00" }}
                                    />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col flex-1 min-w-0 w-full">
                                    <div
                                        className="font-sans font-bold text-sm"
                                        style={{ color: isHovered ? "#000000" : "var(--foreground)" }}
                                    >
                                        {s.label}
                                    </div>
                                    <div className="flex flex-wrap items-center gap-2 mt-0.5 max-w-full">
                                        <span
                                            className="font-mono text-[10px] md:text-xs truncate"
                                            style={{ color: isHovered ? "rgba(0,0,0,0.6)" : "var(--muted)" }}
                                        >
                                            {s.handle}
                                        </span>
                                        <span
                                            className="font-mono text-[10px] tracking-widest uppercase px-1.5 py-0.5 rounded-sm"
                                            style={{
                                                background: isHovered ? "rgba(0,0,0,0.12)" : "var(--log-bg)",
                                                color: isHovered ? "rgba(0,0,0,0.5)" : "var(--muted)",
                                            }}
                                        >
                                            {s.sublabel}
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>

            {/* Footer */}
            <div
                className="px-4 sm:px-6 md:px-10 py-6 md:py-4 flex flex-col items-center justify-center gap-4 text-center"
                style={{ borderTop: "0.5px solid var(--border-subtle)" }}
            >
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                    SYSTEM VERSION 1.0 &nbsp;//&nbsp; EPFL CAMPUS, LAUSANNE
                </span>
                <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
                    © 2026 SACHA BUMANN. ALL RIGHTS RESERVED.
                </span>
            </div>
        </section>
    );
}
