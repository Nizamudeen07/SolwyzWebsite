"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import ourImg from "@assets/OurServices/ourImg.svg";
// import Img1 from "@assets/OurServices/seo.svg";
// import Img2 from "@assets/OurServices/socialmark.svg";
// import Img3 from "@assets/OurServices/sem.svg";
// import Img4 from "@assets/OurServices/influ.svg";
// import Img5 from "@assets/OurServices/videomarketing.svg";
// import Img6 from "@assets/OurServices/branding.svg";
// import Img7 from "@assets/OurServices/webdeve.svg";
// import Img8 from "@assets/OurServices/appmark.svg";
// import Img9 from "@assets/OurServices/ero.svg";
// import Img0 from "@assets/OurServices/crm.svg";
// import verticleLine from "@assets/OurServices/verticleline.svg";
// import HorizondalLine from "@assets/OurServices/horizondalline.svg";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  const cardsRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headingRef.current,
          start: "bottom 95%",
          end: "+=400",
          scrub: true,
        },
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          lineRef.current,
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 1, ease: "power2.out" },
          "<+0.2"
        )
        .fromTo(
          subHeadRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          "<+0.2"
        );

      const elements = gsap.utils.toArray(".group", cardsRef.current);
      elements.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.to(".vertical-line", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".our-service",
          start: "top center",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.from(".content", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".our-service",
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });

      gsap.fromTo(
        ".parallax-heading",
        { opacity: 0, yPercent: 30, scale: 1.2, filter: "blur(10px)" },
        {
          opacity: 0.07,
          yPercent: -10,
          scale: 1,
          filter: "blur(0px)",
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
    }, cardsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="relative mt-[184px] md:max-w-[1440px] md:mx-auto md:px-6 px-6 md:mt-[72px] bg-[#000000]"
      ref={cardsRef}
    >
      <div className="relative w-full">
  {/* <h2 className="parallax-heading uppercase hidden md:block absolute top-[960px] left-1/2 -translate-x-1/2 tracking-wider text-[160px] font-bold text-white opacity-10 pointer-events-none z-10 leading-none whitespace-nowrap">
    Services
  </h2> */}
</div>

      <div className="relative z-10 our-service">
        <div className="md:px-[120px] md:mt-0 mt-[72px]">
          <h2
            ref={headingRef}
            className="md:text-[48px] text-[24px] font-bold md:text-center text-center text-[#FFFFFF] content"
          >
            Our Services
          </h2>
        </div>

        <div>
          <div className="relative flex justify-center mt-4 vertical-line-container">
            <img
              ref={lineRef}
              src='/assets/OurServices/verticleline.svg'
              alt="vertical line"
              className="vertical-line"
              style={{ transform: "scaleY(0)" }}
            />
          </div>

          <div ref={subHeadRef} className="text-center text-white md:mt-8 content">
            With an in-house team, we offer{" "}
            <span className="text-[#04A391]">personalized services</span>
          </div>

          {/* Digital Marketing */}
          <div>
            <h3 className="text-[32px] font-bold text-white text-center md:mt-14">
              Digital Marketing Services
            </h3>
            <img className="mx-auto mt-4" src='/assets/OurServices/horizondalline.svg' alt="Horizontal Line" />
            <p className="text-base font-medium text-[#A7A7A7] text-center mt-4">Choose from our wide range of services designed to maximize your ROI. <br className="hidden md:block" />
              Click to explore each service</p>
          </div>

          <div className="  px-4  md:max-w-[1206px] mx-auto md:mt-[80px]">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[37px] md:gap-[56px] justify-items-center">
              <Link href="/services/digital-marketing/seo">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/seo.svg' className=" w-[64px] h-[64px] " alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="   font-semibold text-[16px] ">
                        SEO Services
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Rank higher on Google & attract
                        qualified traffic
                      </p>
                    </div>
                  </div>

                </div>
              </Link>
              <Link href="/services/digital-marketing/social-media-marketing">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/socialmm.svg' className=" w-[64px] h-[64px]" alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="font-semibold text-[16px] ">
                        Social Media Marketing
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[268px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Build awareness & engagement on
                        Instagram, Facebook,LinkedIn & more.</p>
                    </div>
                  </div>

                </div>
              </Link>
              <Link href="/services/digital-marketing/search-engine-marketing">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/sem.svg' className=" w-[64px] h-[64px]" alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="font-semibold text-[16px] ">
                        Search engine marketing
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Targeted ads that drive instant leads
                        with high ROI.
                      </p>
                    </div>
                  </div>

                </div>
              </Link>
              <Link href="/services/digital-marketing/influencer-marketing">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/influ.svg' className="w-[64px] h-[64px] " alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="font-semibold text-[16px] ">
                        Influencer Marketing
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] w-[243px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Collaborate with trusted voices in your
                        niche
                      </p>
                    </div>
                  </div>

                </div>
              </Link>
              <Link href="/services/digital-marketing/video-marketing">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/videomarketing.svg' className="w-[64px] h-[64px] " alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="font-semibold text-[16px] ">
                        Video Marketing
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[262px] w-[245px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Engage your audience with impactful
                        videos .
                      </p>
                    </div>
                  </div>

                </div>
              </Link>
              <Link href="/services/digital-marketing/branding">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[384px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/branding.svg' className="w-[64px] h-[64px] " alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="font-semibold text-[16px] ">
                        Branding
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[269px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Build a consistent brand image that
                        sets you apart in the market.
                      </p>
                    </div>
                  </div>

                </div>
              </Link>
          </div>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-[32px] font-bold text-white text-center mt-14">IT Services</h3>
            <img className="mx-auto mt-4" src='/assets/OurServices/horizondalline.svg' alt="Horizontal Line" />
            <p className="text-base font-medium text-[#A7A7A7] text-center mt-4">Choose from our wide range of services designed to maximize your ROI. <br className="hidden md:block" />
              Click to explore each service</p>
          </div>

          <div className="px-4  md:max-w-[1206px] mx-auto md:mt-[80px] mt-10">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-[37px] md:gap-[56px] justify-items-center">
              {/* Web Development */}
              <Link href="/services/it-services/web-development">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/webdeve.svg ' className=" w-[64px] h-[64px] " alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="   font-semibold text-[16px] ">
                        Web Development
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[340px] w-[239px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Build responsive, SEO-friendly, and high-performing
                      </p>
                    </div>
                  </div>

                </div>
              </Link>

              {/* App Development */}
              <Link href="/services/it-services/app-development">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/appmark.svg' className=" w-[64px] h-[64px] " alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="   font-semibold text-[16px] ">
                        App Development
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[340px] w-[236px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Create user-friendly, scalable iOS & Android apps to
                        engage your customers.
                      </p>
                    </div>
                  </div>

                </div>
              </Link>

              {/* ERP Solutions */}
              <Link href="/services/it-services/erp">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/erp.svg' className=" w-[64px] h-[64px] " alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="   font-semibold text-[16px] ">
                        ERP Solutions
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[376px] w-[248px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Streamline finance, HR, inventory, and operations with an
                        integrated ERP system tailored to your business.
                      </p>
                    </div>
                  </div>

                </div>
              </Link>

              {/* CRM Solutions */}
              <Link href="/services/it-services/crm">
                <div className="border hover:border-[#696969] h-[120px] rounded-[8px] group duration-300 md:justify-between hover:rounded-2xl hover:bg-gradient-to-b from-[#202020] to-[#0C0C0C] md:flex text-white border-[#2E2E2E] md:w-[588px] w-[361px] p-6  ">
                  <div className="flex  gap-4 md:gap-0 items-start">
                    <img src='/assets/OurServices/crm.svg' className=" w-[64px] h-[64px] " alt="" />
                    <div className="md:ml-[19px]">
                      <h4 className="   font-semibold text-[16px] ">
                        CRM Solutions
                      </h4>
                      <p className="text-start text-[#A5A5A5] font-medium md:w-[355px] w-[236px] justify-center mt-1  group-hover:text-white text-sm leading-[18px]">
                        Manage leads, automate sales, and improve customer
                        relationships with powerful CRM systems.
                      </p>
                    </div>
                  </div>

                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
