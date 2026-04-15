"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.985,
    filter: "blur(10px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.2,
}) {
  return (
    <motion.div
      className={className}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
