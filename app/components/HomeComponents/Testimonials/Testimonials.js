"use client";


import { useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [




  {
    name: "Anwar Shahul Hameed",
    company: "CEO - King Life Trading LLC",
    text: "As a trading company, we relied on Solwyz to build our website and handle digital marketing. Their clear approach and fast execution helped us grow online with confidence.",
    image: "/assets/Testimonial/anwar.svg",
  },

  {
    name: "Dr Anusree",
    company: "Managing Director - Leelajani Ayurcare",
    text: "Solwyz has been managing our digital marketing with genuine effort and focus. Their strategies have helped Leelajani Ayurcare reach more people seeking trusted Ayurvedic care.",
    image: "/assets/Testimonial/dranusreee.svg",
  },
  {
    name: "Shajan Joseph",
    company: "Brand Manager - Dr. Food Nutri",
    text: "Solwyz gave us a clean, vibrant platform to showcase our products. Their content and design really reflect our food brand.",
    image: "/assets/Testimonial/sajanabrahamm.svg",
  },
  {
    name: "Dr. Arya",
    company: "CEO - Dr. Arya’s Ident",
    text: "Solwyz crafted a website that perfectly reflects our brand and continues to manage our online presence with clarity, consistency, and care.",
    image: "/assets/Testimonial/draryaa.svg",
  },
  {
    name: "Er. Prashobh V",
    company: "Chairman - Map Foundation",
    text: "Solwyz delivered a professional, modern site that highlights our architectural expertise. Their attention to design and structure truly impressed us.",
    image: "/assets/Testimonial/prashobb.svg",
  },
];

function Testimonials() {

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setSlidesToShow(1);
        } else if (window.innerWidth < 1024) {
          setSlidesToShow(2);
        } else {
          setSlidesToShow(3);
        }
      };

      handleResize(); // initial check
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="text-[#FFFFFF] md:mt-[104px] mt-[72px] max-w-[1550px] mx-auto bg-[#000000]">
      {/* Top quotes */}
      <Image
        src="/assets/doublequotes-big.svg"
        alt="Double Quotes"
        width={64}
        height={64}
        className="mx-auto"
      />


      {/* Heading */}
      <h2 className="md:text-[48px] text-[20px] font-bold text-center md:px-[215px] px-6">
        Discover what our clients have to say about their{" "}
        <span className="font-light text-[#04A391]">experience with us</span>
      </h2>

      {/* Slider */}
      <div className="md:mt-[104px] mt-[40px] px-4 md:px-8">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-2 py-10 relative">
              {/* Gradient Border */}
              <div className="p-[2px] bg-gradient-to-br from-[#620559] via-[#182221] to-[#028375] rounded-tl-[32px] rounded-br-[32px] h-full">
                {/* Inner Box */}
                <div className="bg-[#061615] p-6 md:p-8 w-full rounded-tl-[32px] rounded-br-[32px] min-h-[327px] fullBoxShadow text-center relative">

                  {/* Profile Image */}
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden absolute left-1/2 transform -translate-x-1/2 -top-[3.5rem] md:-top-[4rem]  ">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-[18px] md:text-[20px] font-medium text-white mt-12">
                    {testimonial.name}
                  </h3>
                  {/* Company */}
                  <p className="text-[14px] md:text-[16px] mt-2 text-[#ACACAC]">
                    {testimonial.company}
                  </p>
                  {/* Text */}
                  <p className="text-[14px] md:text-[16px] text-center md:text-justify font-normal text-[#CACACA] leading-6 mt-4">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
