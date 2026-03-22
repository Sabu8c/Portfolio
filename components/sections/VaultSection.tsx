"use client";

import { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { Flame, ArrowUpRight, Cpu, Wifi } from "lucide-react";
import { useMouseGlow } from "@/components/hooks/useMouseGlow";

const BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];

const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: BEZIER } },
};

/* ── Animated number counter ── */
function AnimatedStat({ value, unit, label, index }: { value: string; unit: string; label: string; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    // Extract numeric part for animation
    const numericMatch = value.match(/[\d,]+/);
    const numericValue = numericMatch ? parseInt(numericMatch[0].replace(",", ""), 10) : 0;
    const prefix = value.substring(0, value.indexOf(numericMatch?.[0] || ""));
    const suffix = value.substring((value.indexOf(numericMatch?.[0] || "") + (numericMatch?.[0]?.length || 0)));

    const springValue = useSpring(0, { stiffness: 50, damping: 20, mass: 1 });
    const displayValue = useTransform(springValue, (v) => {
        const num = Math.round(v);
        return num >= 1000 ? num.toLocaleString() : num.toString();
    });

    // Trigger animation when in view
    if (isInView && springValue.get() === 0 && numericValue > 0) {
        springValue.set(numericValue);
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: BEZIER }}
            className="p-4 rounded-sm"
            style={{
                background: "var(--log-bg)",
                border: "0.5px solid rgba(255,77,0,0.2)",
            }}
        >
            <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-1">
                {label}
            </div>
            <div
                className="font-sans font-black text-foreground"
                style={{ fontSize: "1.4rem", lineHeight: 1 }}
            >
                {numericValue > 0 ? (
                    <>
                        {prefix}
                        <motion.span>{displayValue}</motion.span>
                        {suffix}
                    </>
                ) : (
                    value
                )}
            </div>
            <div className="font-mono text-[10px] text-brand-primary tracking-widest uppercase mt-0.5">
                {unit}
            </div>
        </motion.div>
    );
}

const rocketStats = [
    { label: "Thrust", value: "43 N", unit: "peak" },
    { label: "Fuel Type", value: "GOX / ASA-ABS", unit: "hybrid" },
    { label: "Successful tests", value: "15/18", unit: "84% success" },
    { label: "Chamber P.", value: "9 bar", unit: "design" },
];

const gridProjects = [
    {
        icon: Wifi,
        tag: "FPV Drones",
        title: "Custom FPV Drones",
        desc: "Self-built FPV drones for freestyle, long-range and filming. Instagram: @fpbvaud",
        stats: ["5\" Freestyle quad", "7\" Long range", "TinyWhoop"],
        color: "#FF4D00",
    },
    {
        icon: Cpu,
        tag: "Yotta Technology SNC",
        title: "Custom PC Builds",
        desc: "Industrial-grade workstations and gaming rigs. Watercooling, custom cable management, benchmarked to spec.",
        stats: ["For both gaming and professional use", "B2C services"],
        color: "#FF8C00",
    },
];

function ProjectCard({ proj, index }: { proj: typeof gridProjects[0]; index: number }) {
    const { ref, glowStyle, handleMouseMove, handleMouseLeave } = useMouseGlow();

    return (
        <motion.div
            ref={ref}
            key={proj.tag}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: BEZIER }}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="card-glow group relative overflow-hidden rounded-sm p-5 sm:p-6 flex flex-col gap-4"
            style={{
                ...glowStyle,
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
            <div className="flex items-center gap-2 relative z-10">
                <proj.icon size={14} strokeWidth={1.25} style={{ color: proj.color }} />
                <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: proj.color }}
                >
                    {proj.tag}
                </span>
            </div>

            {/* Title */}
            <h4 className="font-sans font-black text-foreground text-xl leading-tight tracking-tight relative z-10">
                {proj.title}
            </h4>

            {/* Desc */}
            <p className="font-mono text-muted text-xs leading-relaxed relative z-10">{proj.desc}</p>

            {/* Stats */}
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
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
            {/*<motion.a
                href="https://www.instagram.com/fpbvaud/"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-widest uppercase mt-2 text-muted hover:text-foreground transition-colors relative z-10"
            >
                Explore Project <ArrowUpRight size={11} strokeWidth={1.25} />
            </motion.a>*/}
        </motion.div>
    );
}

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
                <span className="font-mono text-xs text-brand-primary tracking-widest uppercase">
                    Section 03 // Projects
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
                    ENGINEERING <span className="text-brand-primary">PROJECTS</span>
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
                        <span className="font-mono text-[10px] text-brand-primary tracking-widest uppercase">
                            Travail de maturité
                        </span>
                        <span
                            className="w-2 h-2 rounded-full bg-brand-primary animate-pulse-led"
                            style={{ boxShadow: "0 0 8px #FF4D00" }}
                        />
                    </div>

                    <div className="relative z-10 p-5 sm:p-8 md:p-12">
                        {/* Tag */}
                        <div className="flex items-center gap-2 mb-4">
                            <Flame size={14} strokeWidth={1.25} className="text-brand-primary" />
                            <span className="font-mono text-xs text-brand-primary tracking-widest uppercase">
                                Primary
                            </span>
                        </div>

                        {/* Title */}
                        <h3
                            className="font-sans font-black text-brand-primary leading-none tracking-tight mb-2"
                            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                        >
                            HYBRID ROCKET ENGINE
                        </h3>
                        <p className="font-mono text-muted text-sm mb-8 max-w-xl">
                            A student-engineered hybrid propulsion system developed for high-power
                            rocketry. Gaseous oxygen oxidizer with 3D printed ABS solid fuel grain — full
                            testing telemetry integration.
                        </p>

                        {/* Stats grid — animated counters */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
                            {rocketStats.map((s, i) => (
                                <AnimatedStat
                                    key={s.label}
                                    label={s.label}
                                    value={s.value}
                                    unit={s.unit}
                                    index={i}
                                />
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.a
                            href="https://github.com/Bestsage/Hybrid-Rocket-Engine"
                            whileHover={{ x: 6 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="inline-flex items-center gap-2 mt-8 font-mono text-xs text-brand-primary tracking-widest uppercase hover:text-foreground transition-colors"
                        >
                            View GitHub Repository
                            <ArrowUpRight size={14} strokeWidth={1.25} />
                        </motion.a>
                    </div>
                </motion.div>

                {/* ─── Secondary Grid ─── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {gridProjects.map((proj, i) => (
                        <ProjectCard key={proj.tag} proj={proj} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
