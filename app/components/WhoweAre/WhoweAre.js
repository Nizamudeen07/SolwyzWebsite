"use client"; // ✅ Required for client-side hooks & GSAP

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// If you want to use local video asset, import like this:
// import WhoweAreVideo from "@/assets/Videos/web promo.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function WhoweAre() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".animate-heading", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".animate-paragraph",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
          },
          "-=0.5"
        )
        .from(
          ".animate-video",
          {
            opacity: 0,
            y: 40,
            scale: 0.95,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="md:mt-[104px] mt-[72px] md:px-[120px] px-4 text-white max-w-[1550px] mx-auto"
    >
      <div className="md:flex md:justify-between md:items-start flex-col md:flex-row gap-6">
        <h2 className="animate-heading md:text-[48px] text-2xl leading-8 md:text-start text-center font-bold md:leading-[56px]">
          Who we are ?
        </h2>
        <p className="animate-paragraph text-justify hidden md:block font-normal text-base w-[773px]">
          Solwyz Technologies is a UAE -based digital solutions company offering
          custom web and mobile app development, ERP systems, and digital
          marketing services. Since our start in 2022, we’ve focused on creating
          scalable, user-friendly technology for businesses in pharma,
          healthcare, and retail. Our team combines technical expertise with
          industry insight to craft tailored solutions that drive growth and
          performance. From e-commerce platforms to enterprise tools, Solwyz
          empowers clients with innovative, results-driven technology that
          supports real business goals and digital transformation.
        </p>
      </div>

      {/* Video container */}
      <div className="animate-video w-full  rounded-lg md:mt-[104px] flex items-center justify-center md:h-[640px] h-[192px] mt-8 overflow-hidden">
        <div className="w-full h-full relative">
          <video
            className="w-full h-full object-cover"
            src="https://s3.ap-south-1.amazonaws.com/webpromo.solwyz/web+promo+(1).mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
          {/* If you want to use local asset instead:
          <video
            className="w-full h-full object-cover"
            src={WhoweAreVideo}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          /> */}
        </div>
      </div>

      {/* Mobile paragraph */}
      <p className="animate-paragraph text-justify md:hidden mt-6 tracking-normal font-normal text-base">
        Solwyz Technologies is a UAE -based digital solutions company offering
        custom web and mobile app development, ERP systems, and digital
        marketing services. Since our start in 2022, we’ve focused on creating
        scalable, user-friendly technology for businesses in pharma, healthcare,
        and retail. Our team combines technical expertise with industry insight
        to craft tailored solutions that drive growth and performance. From
        e-commerce platforms to enterprise tools, Solwyz empowers clients with
        innovative, results-driven technology that supports real business goals
        and digital transformation.
      </p>
    </div>
  );
}
