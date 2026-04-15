"use client"; // ✅ Required for framer-motion animations in Next.js

import { motion } from "framer-motion";

export default function Empowering() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="md:px-[120px] px-4 md:mt-[104px] mt-[72px] max-w-[1540px] mx-auto"
    >
      <h2 className="text-white md:text-[48px] md:w-[736px] text-2xl leading-8 md:leading-[56px] font-bold text-center md:text-start">
        Building Tomorrow’s Business, Today with Solwyz
      </h2>

      <h3 className="text-[#04A391] font-normal md:text-start md:mt-6 mt-4 text-center leading-8 text-2xl">
        Solwyz technologies are leading the way.
      </h3>

      <div className="font-normal text-base text-white text-justify mt-10 tracking-tighter md:tracking-normal md:mt-[64px]">
        <p className="mt-8">
          Solwyz Technologies crafts digital tools that help businesses perform
          better, faster, and smarter. From websites to mobile apps, marketing
          to ERP and CRM systems, our solutions are designed to support growth
          and deliver results. Every project we handle is focused on solving
          real business challenges and creating meaningful improvements.
        </p>

        <p className="mt-8">
          We don’t follow one-size-fits-all templates. Every business is
          different, and so is every solution we build. Our process starts by
          understanding your operations, your needs, and your future goals.
          Whether you&apos;re a startup or a growing enterprise, we focus on
          developing solutions that integrate seamlessly and perform reliably.
        </p>

        <p className="mt-8">
          Clients choose Solwyz for our clarity, consistency, and honest
          approach. We value long-term relationships and are committed to
          helping you succeed at every step. From the first idea to post-launch
          support, we keep your business at the center of everything we do. At
          Solwyz Technologies, we don’t just deliver services—we become your
          technology partner, ensuring that your digital foundation is strong,
          scalable, and ready for whatever’s next.
        </p>
      </div>
    </motion.div>
  );
}
