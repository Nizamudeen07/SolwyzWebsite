"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  { bg: "/assets/about/innovateBg.png", image: "/assets/about/innovate.png", title: "Innovate" },
  { bg: "/assets/about/impactBg.png", image: "/assets/about/impact.png", title: "Impact" },
  { bg: "/assets/about/integrateBg.png", image: "/assets/about/integrate.png", title: "Integrate" },
];

export default function AboutAnimate() {
  const containerRef = useRef(null);

  useEffect(() => {
    const panels = gsap.utils.toArray(".panel");

    panels.forEach((panel) => {
      const bg = panel.querySelector(".background-image");
      const img = panel.querySelector(".main-image");
      const text = panel.querySelector(".main-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        bg,
        { y: "20%", scale: 1.1 },
        { y: "0%", scale: 1, ease: "power4.out", duration: 1 },
        0
      )
        .fromTo(
          img,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.5 },
          0.3
        )
        .fromTo(
          text,
          { opacity: 0, y: 100, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, ease: "power4.out", duration: 1.5 },
          0.6
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {panels.map((panel, index) => (
        <section
          key={index}
          className="panel relative w-full h-screen flex items-center justify-center"
        >
          <img
            src={panel.bg}
            alt="background"
            className="background-image absolute w-full h-full object-cover top-0 left-0 z-0"
          />

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <img
              src={panel.image}
              alt={panel.title}
              className="main-image w-[260px] md:w-[510px] h-[220px] object-contain opacity-0"
            />
            <h1 className="main-text text-white text-[70px] md:text-[160px] font-bold opacity-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {panel.title}
            </h1>
          </div>
        </section>
      ))}
    </div>
  );
}
