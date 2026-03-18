"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ReticleCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const mx = useMotionValue(-100);
    const my = useMotionValue(-100);
    const sx = useSpring(mx, { stiffness: 300, damping: 28, mass: 0.5 });
    const sy = useSpring(my, { stiffness: 300, damping: 28, mass: 0.5 });
    const dotX = useSpring(mx, { stiffness: 600, damping: 30, mass: 0.3 });
    const dotY = useSpring(my, { stiffness: 600, damping: 30, mass: 0.3 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mx.set(e.clientX);
            my.set(e.clientY);
        };

        const handleEnter = () => setIsHovering(true);
        const handleLeave = () => setIsHovering(false);

        window.addEventListener("mousemove", moveCursor);

        const interactables = document.querySelectorAll("a, button, [data-cursor]");
        interactables.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        const observer = new MutationObserver(() => {
            const els = document.querySelectorAll("a, button, [data-cursor]");
            els.forEach((el) => {
                el.addEventListener("mouseenter", handleEnter);
                el.addEventListener("mouseleave", handleLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            observer.disconnect();
        };
    }, [mx, my]);

    return (
        <>
            {/* Outer ring / crosshair */}
            <motion.div
                className="pointer-events-none fixed z-[99999] flex items-center justify-center"
                style={{
                    x: sx,
                    y: sy,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                <motion.div
                    animate={{
                        width: isHovering ? 48 : 28,
                        height: isHovering ? 48 : 28,
                        opacity: isHovering ? 1 : 0.7,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="relative border border-brand-orange rounded-full"
                    style={{ borderWidth: "1px" }}
                >
                    {/* Crosshair lines */}
                    <motion.div
                        animate={{ opacity: isHovering ? 1 : 0, scaleX: isHovering ? 1 : 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-brand-orange origin-center"
                    />
                    <motion.div
                        animate={{ opacity: isHovering ? 1 : 0, scaleY: isHovering ? 1 : 0 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-brand-orange origin-center"
                    />
                </motion.div>
            </motion.div>

            {/* Center dot */}
            <motion.div
                className="pointer-events-none fixed z-[99999] rounded-full bg-brand-orange"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: 5,
                    height: 5,
                }}
            />
        </>
    );
}
