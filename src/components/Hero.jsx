import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <section className="relative font-[Neue]  flex h-full flex-col items-center justify-center bg-gradient-to-b from-[#F2FAF8] to-white text-center">
        <div>
          <div className="absolute -top-2 right-1 md:right-10 md:top-4">
            <motion.img
              src="/Lightning 1.svg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="h-10 w-10 md:h-24 md:w-24 sm:h-20 sm:w-20"
            />
          </div>

          <div className="absolute -left-4 -bottom-32  md:bottom-10 md:-left-8">
            <motion.img
              src="/Asterisk 2 (4).svg"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-10 w-10 md:h-24 md:w-24 sm:h-20 sm:w-20"
            />
          </div>
        </div>

        <div className="mb-16 md:mb-28 flex justify-center items-center flex-col">
          <motion.img
            src="/cwd-logo.png"
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            alt="cwd logo"
            className="h-2/4 w-2/4 md:h-auto md:w-auto"
          />
          <p className=" -mt-7 border border-[#fb9927]/70 p-3 text-lg font-extrabold text-[#1b1b1b] md:-mt-20 md:p-5 md:text-3xl">
            Knowledge Beyond YouTube
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
