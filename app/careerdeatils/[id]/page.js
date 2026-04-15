"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

import Api from "../../../Service/Api";

function CareerDetails() {
  const words = ["Creativity", "Innovation", "Growth"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [responsibilities, setResponsibilities] = useState([""]);
  const [requirements, setRequirements] = useState([""]);

  const router = useRouter();
  const { id } = useParams();

  const handleCareerFormClick = (id) => {
    router.push(`/careerform/${id}`);
  };

  useEffect(() => {
    document.title = "Careers | Solwyz Technologies";

    const interval = setInterval(() => {
      setOpacity(0);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setOpacity(1);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!id) return; // wait for id from router query

    Api.get(`api/designation/id/${id}`)
      .then((response) => {
        console.log("details career", response.data.data.jobDetails);
        setResponsibilities(response.data.data.jobDetails.responsibilities);
        setRequirements(response.data.data.jobDetails.requirements);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="md:mb-[120px] font-manrope md:max-w-[1440px] mx-auto">
      <div className="md:h-[95px] h-[104px]"></div>
      <div>
        <div className="text-white bg-careersbanner md:justify-start justify-center md:h-[358px] bg-cover md:px-[430px] md:py-[99px] px-[52px] py-[97px]">
          <div className="text-[24px] md:font-medium ">Join a culture of</div>

          <div className="hidden md:block">
            <svg
              className="block mt-0 whitespace-nowrap"
              width="100%"
              height="150px"
              viewBox="0 0 1000 120"
              preserveAspectRatio="xMinYMid meet"
            >
              <text
                x="0"
                y="120"
                fontSize="190px"
                fontWeight="700"
                fontFamily="sans-serif"
                fill="none"
                stroke="#0E7368"
                strokeWidth="2"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: opacity,
                }}
              >
                {words[currentIndex]}
              </text>
            </svg>
          </div>

          <div className="md:hidden block">
            <svg
              className="block mt-2 md:mt-0 w-full"
              height="100"
              viewBox="0 0 1000 120"
              preserveAspectRatio="xMinYMid meet"
            >
              <text
                x="0"
                y="100"
                fontSize="190px"
                fontWeight="700"
                fontFamily="sans-serif"
                fill="none"
                stroke="#0E7368"
                strokeWidth="5"
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: opacity,
                }}
              >
                {words[currentIndex]}
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-black min-h-screen text-white py-10 px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 font-manrope">
        {/* Responsibilities Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4 font-manrope">Responsibilities :</h2>
          <ul className="space-y-4 text-sm sm:text-base">
            {responsibilities.map((responsibility, index) => (
              <li className="list-disc ml-6" key={index}>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements Section */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold mb-4 font-manrope">Requirement :</h2>
          <ul className="space-y-4 text-sm sm:text-base">
            {requirements.map((requirement, index) => (
              <li className="list-disc ml-6" key={index}>
                {requirement}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <p className="text-sm font-medium font-manrope mb-6">
          Contact : careerssolwyz@gmail.com
        </p>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="bg-transparent border border-white text-white h-[40px] sm:h-[48px] px-6 sm:px-9 rounded-lg text-sm sm:text-[16px] font-medium hover:border-[#04A391] hover:text-[#04A391] duration-300"
          >
            Back
          </button>

          {/* Apply Button with Gradient Hover */}
          
            <div className="relative group h-[40px] sm:h-[48px] rounded-lg overflow-hidden cursor-pointer bg-[#04A391] px-5 sm:px-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-[#04A391] to-[#035249] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex items-center justify-center gap-2">
                <div 
                 onClick={() => handleCareerFormClick(id)}
                className="text-[12px] sm:text-[16px] text-white font-medium">Apply</div>
                <div>
                  <img src="/assets/Careers/Arrow.svg" alt="arrow" className="w-4 h-4" />
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default CareerDetails;
