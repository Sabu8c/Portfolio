"use client";

import { motion } from "framer-motion";
import { GraduationCap, Zap, Clock, MapPin, Cpu, Rocket } from "lucide-react";

const statusVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
};

interface LogEntry {
    time: string;
    msg: string;
}

const epflLog: LogEntry[] = [
    { time: "09:02:11", msg: "MECA-101 Mechanics initialized" },
    { time: "09:14:55", msg: "PHYS-105 Physics simulation loaded" },
    { time: "10:30:00", msg: "ICC Project compilation: SUCCESS" },
    { time: "11:45:20", msg: "Micro-robot assembly checkpoint PASS" },
];

const yottaLog: LogEntry[] = [
    { time: "08:00:00", msg: "System boot — all nodes online" },
    { time: "09:30:15", msg: "PC Build #12 — benchmark PASS" },
    { time: "11:00:00", msg: "Client delivery: RTX 4090 rig" },
    { time: "14:20:05", msg: "Revenue module updated" },
];

function StatusCard({
    index,
    icon: Icon,
    tag,
    title,
    subtitle,
    role,
    log,
    accentColor = "#FF4D00",
}: {
    index: number;
    icon: React.ElementType;
    tag: string;
    title: string;
    subtitle: string;
    role: string;
    log: LogEntry[];
    accentColor?: string;
}) {
    return (
        <motion.div
            custom={index}
            variants={statusVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex flex-col rounded-sm overflow-hidden"
            style={{
                background: "var(--card-bg)",
                border: "0.5px solid var(--border-subtle)",
            }}
        >
            {/* Top bar */}
            <div
                className="flex items-center justify-between px-5 py-3"
                style={{
                    borderBottom: "0.5px solid var(--border-subtle)",
                }}
            >
                <div className="flex items-center gap-2">
                    <Icon size={14} strokeWidth={1.25} style={{ color: accentColor }} />
                    <span
                        className="font-mono text-xs tracking-widest uppercase"
                        style={{ color: accentColor }}
                    >
                        {tag}
                    </span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span
                        className="inline-block w-2 h-2 rounded-full animate-pulse-led"
                        style={{ backgroundColor: accentColor, boxShadow: `0 0 6px ${accentColor}` }}
                    />
                    <span className="font-mono text-xs text-muted tracking-widest uppercase">
                        Active
                    </span>
                </div>
            </div>

            {/* Main content */}
            <div className="px-5 pt-6 pb-4 flex-1">
                <h3
                    className="font-sans font-black text-foreground leading-none tracking-tight mb-1"
                    style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                >
                    {title}
                </h3>
                <p className="font-mono text-xs text-muted tracking-widest uppercase mt-1 mb-4">
                    {subtitle}
                </p>
                <div
                    className="inline-block px-2.5 py-1 font-mono text-xs tracking-widest uppercase rounded-sm mb-6"
                    style={{
                        background: `${accentColor}18`,
                        color: accentColor,
                        border: `0.5px solid ${accentColor}40`,
                    }}
                >
                    {role}
                </div>

                {/* System log */}
                <div
                    className="rounded-sm p-4 font-mono text-xs space-y-2"
                    style={{
                        background: "var(--log-bg)",
                        border: "0.5px solid var(--border-subtle)",
                    }}
                >
                    <div className="flex items-center gap-2 mb-3" style={{ color: accentColor }}>
                        <span className="tracking-widest uppercase text-[10px]">// System Log</span>
                    </div>
                    {log.map((entry, i) => (
                        <div key={i} className="flex gap-3">
                            <span className="text-muted shrink-0">{entry.time}</span>
                            <span className="text-foreground/60 break-words flex-1 leading-snug tracking-tight">{entry.msg}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom meta */}
            <div
                className="flex items-center gap-4 px-5 py-3"
                style={{ borderTop: "0.5px solid var(--border-subtle)" }}
            >
                <div className="flex items-center gap-1.5 text-muted">
                    <MapPin size={11} strokeWidth={1.25} />
                    <span className="font-mono text-[10px] tracking-widest uppercase">
                        Lausanne, CH
                    </span>
                </div>
                <div className="flex items-center gap-1.5 text-muted">
                    <Clock size={11} strokeWidth={1.25} />
                    <span className="font-mono text-[10px] tracking-widest uppercase">
                        2024 — Present
                    </span>
                </div>
            </div>
        </motion.div>
    );
}

export default function StatusSection() {
    return (
        <section
            id="status"
            className="relative py-24 sm:py-32 md:py-48 px-4 sm:px-6 md:px-10 section-divider"
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
                    Section 02 // Current Ops
                </span>
                <div className="h-px flex-1" style={{ background: "var(--border-subtle)" }} />
            </motion.div>

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-sans font-black text-foreground mb-10 tracking-tight leading-none"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                    STATUS —{" "}
                    <span className="text-muted font-light">CURRENT OPERATIONS</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <StatusCard
                        index={0}
                        icon={GraduationCap}
                        tag="Academic"
                        title="EPFL Microengineering"
                        subtitle="Bachelor — Semester 2"
                        role="Student Engineer"
                        log={epflLog}
                        accentColor="#FF4D00"
                    />
                    <StatusCard
                        index={1}
                        icon={Zap}
                        tag="Business"
                        title="Yotta Technology SNC"
                        subtitle="High-Performance PC Systems"
                        role="Cofounder"
                        log={yottaLog}
                        accentColor="#FF8C00"
                    />
                </div>
            </div>
        </section>
    );
}
