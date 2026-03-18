"use client";

import { motion } from "framer-motion";
import { Music2, Radio, Disc3 } from "lucide-react";

const BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1];

const BAR_DELAYS = ["bar1", "bar2", "bar3", "bar4", "bar5", "bar6", "bar7", "bar8"];

const tracks = [
    { title: "Aphex Twin — Xtal", bpm: "108 BPM", genre: "Ambient Electronic" },
    { title: "Burial — Archangel", bpm: "92 BPM", genre: "UK Garage" },
    { title: "Floating Points — LesAlpx", bpm: "120 BPM", genre: "Electronic" },
    { title: "Jon Hopkins — Open Eye Signal", bpm: "135 BPM", genre: "Techno" },
    { title: "Four Tet — She Just Likes To Fight", bpm: "128 BPM", genre: "Electronic" },
];

export default function FrequencySection() {
    return (
        <section
            id="frequency"
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
                    Section 04 // The Frequency
                </span>
                <div className="h-px flex-1" style={{ background: "var(--border-subtle)" }} />
            </motion.div>

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-sans font-black text-foreground tracking-tight leading-none mb-12"
                    style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                    THE <span className="text-brand-orange">FREQUENCY</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: CSS Visualizer + now playing */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: BEZIER }}
                        className="flex flex-col gap-8"
                    >
                        {/* Visualizer */}
                        <div
                            className="p-6 rounded-sm"
                            style={{
                                background: "var(--card-bg)",
                                border: "0.5px solid var(--border-subtle)",
                                transition: "background 0.3s ease, border-color 0.3s ease",
                            }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Radio size={13} strokeWidth={1.25} className="text-brand-orange" />
                                <span className="font-mono text-[10px] text-brand-orange tracking-widest uppercase">
                  // Audio Signal
                                </span>
                            </div>

                            {/* Bars */}
                            <div className="flex items-end gap-1.5 h-20">
                                {BAR_DELAYS.map((cls, i) => (
                                    <div
                                        key={i}
                                        className={`flex-1 rounded-sm origin-bottom animate-${cls}`}
                                        style={{
                                            background:
                                                i < 3
                                                    ? "#FF4D00"
                                                    : i < 6
                                                        ? "#FF6820"
                                                        : "#FF8C00",
                                            height: "100%",
                                            opacity: 0.85,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Waveform label */}
                            <div className="mt-4 flex justify-between">
                                <span className="font-mono text-[10px] text-muted tracking-widest">
                                    20 Hz
                                </span>
                                <span className="font-mono text-[10px] text-muted tracking-widest">
                                    20 kHz
                                </span>
                            </div>
                        </div>

                        {/* Now playing card */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5, ease: BEZIER }}
                            className="p-5 rounded-sm flex items-center gap-4"
                            style={{
                                background: "rgba(255,77,0,0.05)",
                                border: "0.5px solid rgba(255,77,0,0.2)",
                            }}
                        >
                            <div className="relative flex-shrink-0">
                                <div
                                    className="w-12 h-12 rounded-full flex items-center justify-center"
                                    style={{ background: "rgba(255,77,0,0.15)" }}
                                >
                                    <Disc3
                                        size={22}
                                        strokeWidth={1.25}
                                        className="text-brand-orange animate-spin"
                                        style={{ animationDuration: "4s" }}
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="font-sans font-bold text-foreground text-sm">
                                    Currently Listening
                                </p>
                                <p className="font-mono text-xs text-muted mt-0.5">
                                    Electronic / Ambient / Techno
                                </p>
                            </div>
                            <div className="ml-auto">
                                <Music2 size={16} strokeWidth={1.25} className="text-brand-orange" />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Track list */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="font-mono text-xs text-muted tracking-widest uppercase mb-6">
              // Current Rotation
                        </p>
                        <div className="space-y-0">
                            {tracks.map((track, i) => (
                                <motion.div
                                    key={track.title}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.05 * i, duration: 0.4, ease: BEZIER }}
                                    whileHover={{ x: 8, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                                    className="track-item group flex items-center justify-between py-4 pl-4 border-b cursor-pointer"
                                    style={{ borderColor: "var(--border-subtle)" }}
                                >
                                    <div className="flex items-center gap-3">
                                        <span
                                            className="font-mono text-[10px] text-muted w-5 text-right group-hover:text-brand-orange transition-colors duration-200"
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="font-sans text-sm text-foreground font-medium group-hover:text-brand-orange transition-colors duration-200">
                                            {track.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-[10px] text-muted tracking-widest hidden md:block">
                                            {track.genre}
                                        </span>
                                        <span
                                            className="font-mono text-[10px] px-2 py-0.5 rounded-sm"
                                            style={{
                                                background: "rgba(255,77,0,0.08)",
                                                color: "#FF4D00",
                                                border: "0.5px solid rgba(255,77,0,0.2)",
                                            }}
                                        >
                                            {track.bpm}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
