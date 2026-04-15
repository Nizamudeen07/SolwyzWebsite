"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import "./HomeBanner.css";

export default function HomeBanner() {
  const bannerRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const buttonRef = useRef(null);
  const orbsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 70, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }
      )
        .fromTo(
          subheadingRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.55"
        )
        .fromTo(
          buttonRef.current,
          { opacity: 0, y: 24, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          "-=0.45"
        );

      gsap.to(orbsRef.current, {
        yPercent: -10,
        xPercent: 4,
        duration: 7,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.6,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bannerRef}>
      <div className="md:h-[95px] h-[104px]"></div>

      <div className="hero-video-shell relative text-white md:h-[744px] h-[544px] flex items-center justify-center md:px-[120px] px-[33px]">
        <div
          ref={(el) => {
            orbsRef.current[0] = el;
          }}
          className="hero-orb absolute left-[8%] top-[22%] h-36 w-36 rounded-full bg-[#04A391]/20 blur-3xl"
        />
        <div
          ref={(el) => {
            orbsRef.current[1] = el;
          }}
          className="hero-orb hero-orb-delay absolute right-[10%] bottom-[16%] h-44 w-44 rounded-full bg-[#9f5ca0]/20 blur-3xl"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/bannerVid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/20 to-transparent"></div>

        <div className="relative z-10 md:mt-[-62px] text-center">
          <h1
            ref={headingRef}
            className="md:text-[88px] text-[28px] font-light leading-[56px] md:leading-[82px]"
          >
            <span>Your Growth Partners in </span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r md:text-[72px] text-[52px] font-light from-[#9f5ca0] via-[#42a398] to-[#00AE9A]"
            >
              MENA & India
            </span>
          </h1>

          <p
            ref={subheadingRef}
            className="mx-auto mt-6 max-w-[650px] text-sm leading-6 text-white/75 md:text-base"
          >
            We pair strategy, digital products, and performance marketing with a
            cleaner motion system that keeps every section feeling fluid.
          </p>

          <div className="md:mt-20 mt-10">
            <Link
              href="/about"
              ref={buttonRef}
              className="bg-[#FFFFFF] cursor-pointer duration-300 hover:bg-[#04A391] hover:text-white text-[#000000] text-[16px] w-fit py-[14px] px-8 rounded-lg md:mt-10 mx-auto mb-[100px] hover:bg-gradient-to-r hover:from-[#00695f] hover:to-[#00C0A6]"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
