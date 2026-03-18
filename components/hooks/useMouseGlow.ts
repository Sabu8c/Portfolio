"use client";

import { useRef, useCallback, useState } from "react";

interface GlowState {
    x: number;
    y: number;
    opacity: number;
}

export function useMouseGlow() {
    const ref = useRef<HTMLDivElement>(null);
    const [glow, setGlow] = useState<GlowState>({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGlow({ x, y, opacity: 1 });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setGlow((prev) => ({ ...prev, opacity: 0 }));
    }, []);

    const glowStyle: React.CSSProperties = {
        "--glow-x": `${glow.x}%`,
        "--glow-y": `${glow.y}%`,
        "--glow-opacity": glow.opacity,
    } as React.CSSProperties;

    return { ref, glowStyle, handleMouseMove, handleMouseLeave };
}
