"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        lenisRef.current = lenis;

        let snapTimeout: ReturnType<typeof setTimeout>;
        let isSnapping = false;

        lenis.on("scroll", () => {
            if (isSnapping) return;

            clearTimeout(snapTimeout);
            snapTimeout = setTimeout(() => {
                const sections = Array.from(document.querySelectorAll("section"));
                let closest: Element | null = null;
                let minDist = Infinity;

                sections.forEach((sec) => {
                    const rect = sec.getBoundingClientRect();
                    const dist = Math.abs(rect.top);

                    // Snap only if section is within 45% of viewport
                    if (dist < minDist && dist < window.innerHeight * 0.45) {
                        minDist = dist;
                        closest = sec;
                    }
                });

                // Threshold of 5px to avoid micro-snaps if already centered
                if (closest && minDist > 5) {
                    isSnapping = true;
                    lenis.scrollTo(closest as HTMLElement, {
                        offset: 0,
                        duration: 1.4,
                        easing: (t: number) => 1 - Math.pow(1 - t, 4),
                    });

                    // Unlock the trigger right after the scroll animation resolves
                    setTimeout(() => {
                        isSnapping = false;
                    }, 1500);
                }
            }, 150);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => {
            clearTimeout(snapTimeout);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
