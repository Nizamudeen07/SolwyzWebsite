"use client";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);
    const frameRef = useRef(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (prefersReducedMotion.matches) {
            document.documentElement.classList.remove("lenis");
            return;
        }

        const lenis = new Lenis({
            duration: 1.15,
            lerp: 0.1,
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.1,
        });

        lenisRef.current = lenis;
        document.documentElement.classList.add("lenis");

        const onScroll = () => ScrollTrigger.update();
        lenis.on("scroll", onScroll);

        const raf = (time) => {
            lenis.raf(time);
            frameRef.current = window.requestAnimationFrame(raf);
        };

        frameRef.current = window.requestAnimationFrame(raf);
        ScrollTrigger.refresh();

        return () => {
            lenis.off("scroll", onScroll);
            lenis.destroy();
            if (frameRef.current) {
                window.cancelAnimationFrame(frameRef.current);
            }
            document.documentElement.classList.remove("lenis");
        };
    }, []);

    return <>{children}</>;
}
