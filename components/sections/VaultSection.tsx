"use client";

import { motion } from "framer-motion";
import { Flame, Gauge, Triangle, ArrowUpRight, Cpu, Wifi } from "lucide-react";

const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const rocketStats = [
    { label: "Thrust", value: "450 N", unit: "peak" },
    { label: "Fuel Type", value: "N₂O / HTPB", unit: "hybrid" },
    { label: "Peak Alt.", value: "3,200 m", unit: "target" },
    { label: "Chamber P.", value: "35 bar", unit: "design" },
];

const gridProjects = [
    {
        icon: Wifi,
        tag: "FPV Systems",
        title: "Custom Drone Fleet",
        desc: "Sub-10ms latency FPV builds. 5\" race quads + long-range cruisers with DJI O3 Air Unit integration.",
        stats: ["< 10 ms latency", "DJI O3 Integration", "5\" Freestyle"],
        color: "#FF4D00",
    },
    {
        icon: Cpu,
        tag: "High-Perf PC",
        title: "Custom PC Builds",
        desc: "Industrial-grade workstations and gaming rigs. Watercooling, custom cable management, benchmarked to spec.",
        stats: ["RTX 4090 Tier", "Custom Loops", "OC Benchmarks"],
        color: "#FF8C00",
    },
];

export default function VaultSection() {
    return (
        <section
            id="vault"
            className="relative py-24 sm:py-32 md:py-48 px-4 sm:px-6 md:px-10 section-divider transition-colors duration-300"
            style={{ background: "var(--void)" }}
        >
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
                    Section 03 // The Vault
                </span>
                <div className="h-px flex-1" style={{ background: "var(--border-subtle)" }} />
            </motion.div>

            <div className="max-w-6xl mx-auto space-y-8">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-sans font-black text-foreground tracking-tight leading-none"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                    ENGINEERING <span className="text-brand-orange">PROJECTS</span>
                </motion.h2>

                {/* ─── FEATURED: Hybrid Rocket Engine ─── */}
                <motion.div
                    variants={sectionVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative overflow-hidden rounded-sm"
                    style={{ border: "0.5px solid rgba(255,77,0,0.25)" }}
                >
                    {/* Schematic background */}
                    <div className="schematic-bg absolute inset-0" />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(to bottom right, var(--card-bg) 20%, transparent)",
                        }}
                    />

                    {/* Orange corner LED */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                        <span className="font-mono text-[10px] text-brand-orange tracking-widest uppercase">
                            TM Certified
                        </span>
                        <span
                            className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-led"
                            style={{ boxShadow: "0 0 8px #FF4D00" }}
                        />
                    </div>

                    <div className="relative z-10 p-5 sm:p-8 md:p-12">
                        {/* Tag */}
                        <div className="flex items-center gap-2 mb-4">
                            <Flame size={14} strokeWidth={1.25} className="text-brand-orange" />
                            <span className="font-mono text-xs text-brand-orange tracking-widest uppercase">
                                Primary // Featured Project
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            className="font-sans font-black text-brand-orange leading-none tracking-tight mb-2"
                            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                        >
                            HYBRID ROCKET ENGINE
                        </h3>
                        <p className="font-mono text-muted text-sm mb-8 max-w-xl">
                            A student-engineered hybrid propulsion system developed for high-altitude
                            rocketry. Nitrous oxide oxidizer with HTPB solid fuel grain — full
                            telemetry integration.
                        </p>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
                            {rocketStats.map((s) => (
                                <div
                                    key={s.label}
                                    className="p-4 rounded-sm"
                                    style={{
                                        background: "var(--log-bg)",
                                        border: "0.5px solid rgba(255,77,0,0.2)",
                                    }}
                                >
                                    <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-1">
                                        {s.label}
                                    </div>
                                    <div
                                        className="font-sans font-black text-foreground"
                                        style={{ fontSize: "1.4rem", lineHeight: 1 }}
                                    >
                                        {s.value}
                                    </div>
                                    <div className="font-mono text-[10px] text-brand-orange tracking-widest uppercase mt-0.5">
                                        {s.unit}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="#"
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="inline-flex items-center gap-2 mt-8 font-mono text-xs text-brand-orange tracking-widest uppercase hover:text-foreground transition-colors"
                        >
                            View Technical Dossier
                            <ArrowUpRight size={14} strokeWidth={1.25} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* ─── Secondary Grid ─── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {gridProjects.map((proj, i) => (
                        <motion.div
                            key={proj.tag}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                            whileHover={{ y: -2 }}
                            className="group relative overflow-hidden rounded-sm p-5 sm:p-6 flex flex-col gap-4"
                            style={{
                                background: "var(--card-bg)",
                                border: "0.5px solid var(--border-subtle)",
                                transition: "border-color 0.2s ease, background 0.3s ease",
                            }}
                        >
                            {/* Hover border glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    border: `0.5px solid ${proj.color}40`,
                                    borderRadius: "inherit",
                                }}
                            />

                            {/* LED */}
                            <div className="absolute top-4 right-4">
                                <span
                                    className="w-2 h-2 rounded-full inline-block animate-pulse-led"
                                    style={{ backgroundColor: proj.color, boxShadow: `0 0 6px ${proj.color}` }}
                                />
                            </div>

                            {/* Icon + tag */}
                            <div className="flex items-center gap-2">
                                <proj.icon size={14} strokeWidth={1.25} style={{ color: proj.color }} />
                                <span
                                    className="font-mono text-xs tracking-widest uppercase"
                                    style={{ color: proj.color }}
                                >
                                    {proj.tag}
                                </span>
                            </div>

                            {/* Title */}
                            <h4 className="font-sans font-black text-foreground text-xl leading-tight tracking-tight">
                                {proj.title}
                            </h4>

                            {/* Desc */}
                            <p className="font-mono text-muted text-xs leading-relaxed">{proj.desc}</p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {proj.stats.map((s) => (
                                    <span
                                        key={s}
                                        className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-sm"
                                        style={{
                                            background: `${proj.color}12`,
                                            color: proj.color,
                                            border: `0.5px solid ${proj.color}30`,
                                        }}
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>

                            <motion.a
                                href="#"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase mt-2 text-muted hover:text-foreground transition-colors"
                            >
                                Explore Project <ArrowUpRight size={11} strokeWidth={1.25} />
                            </motion.a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
