"use client";

import { motion } from "framer-motion";

export default function AboutOur() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="md:mt-[104px] md:px-[120px] mt-[72px] px-4 max-w-[1440px] mx-auto"
    >
      <div className="md:flex">
        {/* Mobile heading */}
        <h2 className="md:hidden font-bold text-[24px] text-white text-center w-full leading-8">
          Together, We Build. Together,
          <br /> We Grow.
        </h2>

        {/* Desktop image */}
        <img
          src="/assets/about/sijeena.png"
          className="w-[282px] h-[309px] object-cover hidden md:block"
          alt="Team member"
        />

        {/* Mobile image */}
        <img
          src="/assets/about/sijeenaMob.png"
          className="w-[282px] mt-8 mx-auto items-center justify-center h-[309px] object-cover md:hidden"
          alt="Team member"
        />

        {/* Text content */}
        <div className="md:w-[891px] text-white md:ml-6">
          <h2 className="font-bold text-[40px] hidden md:block">
            Together, We Build. Together, We Grow.
          </h2>
          <p className="mt-8 md:mt-[50px] font-light text-xl md:text-start text-justify leading-[28px] md:w-full">
            Our success at Solwyz Technologies is a reflection of the
            commitment, clarity, and innovation brought in by our passionate
            team. Every achievement is a shared one, powered by purpose and
            progress.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
