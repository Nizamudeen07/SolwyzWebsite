"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function BookDemoPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Show text after a short delay
      const showTimer = setTimeout(() => setShowText(true), 1000);
      // Hide text after a few seconds
      const hideTimer = setTimeout(() => setShowText(false), 6000);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://api.whatsapp.com/send?phone=918086058455");
    }
  };

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-4 md:right-[30px] right-4 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        initial={{ width: 54 }}
        animate={{ width: showText ? 200 : 54 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center gap-2 bg-white font-semibold text-[#3DAA30] px-4 py-[14px] rounded-full shadow-lg overflow-hidden relative"
      >
        <Image
          src="/assets/wap.svg"
          alt="WhatsApp"
          width={24}
          height={24}
          className="min-w-[24px]"
        />

        <AnimatePresence>
          {showText && (
            <motion.span
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden whitespace-nowrap typing-animation"
            >
              Chat With Us
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <style jsx>{`
        .typing-animation {
          display: inline-block;
          white-space: nowrap;
          border-right: 2px solid #3daa30;
          width: 0;
          animation: typing 1.5s steps(15) forwards, blink 0.8s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
      `}</style>
    </motion.div>
  );
}
