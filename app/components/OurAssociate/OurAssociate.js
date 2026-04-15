"use client";

import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const associates = [
  { normal: "/assets/OurAssociates/Emerald.svg", hover: "/assets/OurAssociates/EmeraldHover.svg" },
  { normal: "/assets/OurAssociates/Leelanjali.svg", hover: "/assets/OurAssociates/LeelanjaliHover.svg" },
  { normal: "/assets/OurAssociates/KingLife.svg", hover: "/assets/OurAssociates/KingLifeHover.svg" },
  { normal: "/assets/OurAssociates/Savery.svg", hover: "/assets/OurAssociates/SaveryHover.svg" },
  { normal: "/assets/OurAssociates/Hudson.svg", hover: "/assets/OurAssociates/HudsonHover.svg" },
  { normal: "/assets/OurAssociates/MedocPharma.svg", hover: "/assets/OurAssociates/MedocPharmaHover.svg" },
  { normal: "/assets/OurAssociates/AlQudas.svg", hover: "/assets/OurAssociates/AlQudasHover.svg" },
  { normal: "/assets/OurAssociates/Ayurvedic.svg", hover: "/assets/OurAssociates/AyurvedicHover.svg" },
  { normal: "/assets/OurAssociates/CentralLink.svg", hover: "/assets/OurAssociates/CenterLinkHover.svg" },
  { normal: "/assets/OurAssociates/Blend.svg", hover: "/assets/OurAssociates/BlendHover.svg" },
  { normal: "/assets/OurAssociates/DeArt.svg", hover: "/assets/OurAssociates/DeArtHover.svg" },
  { normal: "/assets/OurAssociates/DrFood.svg", hover: "/assets/OurAssociates/DrFoodHover.svg" },
  { normal: "/assets/OurAssociates/KGAPCO.svg", hover: "/assets/OurAssociates/KGAPCOhover.svg" },
  { normal: "/assets/OurAssociates/Oxymiles.svg", hover: "/assets/OurAssociates/OxymilesHover.svg" },
  { normal: "/assets/OurAssociates/Map.svg", hover: "/assets/OurAssociates/MapHover.svg" },
  { normal: "/assets/OurAssociates/Hazi.svg", hover: "/assets/OurAssociates/HaziHover.svg" },
];

export default function OurAssociate() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
  });

  // ✅ Safe window usage for SSR
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth < 480) {
          setSliderSettings({
            ...sliderSettings,
            slidesToShow: 1,
            rows: 3,
          });
        } else if (window.innerWidth < 768) {
          setSliderSettings({
            ...sliderSettings,
            slidesToShow: 1,
            rows: 3,
          });
        } else if (window.innerWidth < 1024) {
          setSliderSettings({
            ...sliderSettings,
            slidesToShow: 3,
            rows: 2,
          });
        } else {
          setSliderSettings({
            ...sliderSettings,
            slidesToShow: 4,
            rows: 2,
          });
        }
      };

      handleResize(); // initial check
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="w-full md:pt-[104px] pt-[72px] max-w-[1550px] mx-auto bg-[#000000]">
      <h2 className="md:text-[48px] text-[24px] px-4 font-bold text-white md:px-[120px]">
        Our <span className="text-[#04A391] font-normal">trusted</span> associates
      </h2>

      <Slider {...sliderSettings} className="mt-10 overflow-x-hidden">
        {associates.map((associate, index) => (
          <div key={index} className="p-2">
            <div
              className="relative w-full h-full aspect-[2/1]  rounded-md overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={associate.normal}
                alt={`Associate ${index}`}
                fill
                className={`object-contain transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-0" : "opacity-100"
                }`}
              />
              <Image
                src={associate.hover}
                alt={`Associate ${index} Hover`}
                fill
                className={`object-contain transition-opacity duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
