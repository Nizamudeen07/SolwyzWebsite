"use client"; // ✅ Required for Next.js client-side components

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RequestAudit from "../RequestAudit/RequestAudit";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

export default function WebDesign() {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { text: "" },
      {
        text: `"Your website should speak for your business, bring in new opportunities, support marketing efforts, and build lasting impressions with visitors."`,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // when element hits 80% viewport
          toggleActions: "play none none none", // play once
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-webDesign bg-cover bg-no-repeat bg-center text-white md:mt-[104px] mt-[72px]"
    style={{ backgroundImage: "url('/assets/website-design-software-provide-modish-template-online-retail-business_1.png')" }}>
      <div className="max-w-[1550px] mx-auto w-full md:h-[713px] h-[333px] md:text-[32px] text-[18px] text-center font-normal md:pt-[95px] pt-[100px] px-4 md:px-[120px] flex flex-col items-center justify-center">
        <p ref={textRef} className="leading-relaxed tracking-wide"></p>
        <RequestAudit />
      </div>
    </div>
  );
}
