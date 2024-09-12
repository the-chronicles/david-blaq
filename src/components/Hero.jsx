import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <section className="relative flex h-full flex-col items-center justify-center bg-gradient-to-b from-[#F2FAF8] to-white text-center">
        <div>
          <div className="absolute -top-2 right-1">
            {/* <img
              src="/Lightning 1.svg"
              alt=""
              className="h-24 w-24 animate-pulse"
            /> */}

            <motion.img
              src="/Lightning 1.svg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1.2 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="h-24 w-24"
            />
          </div>

          <div className="absolute bottom-5 -left-5">
            {/* <img
              src="/Asterisk 2.svg"
              alt=""
              className="h-24 w-24 animate-spin transition-all ease-in"
            /> */}

            <motion.img
              src="/Asterisk 2 (4).svg"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-24 w-24"
            />
          </div>
        </div>

        <div className="mb-28">
          <motion.img
            src="/cwd-logo.png"
            initial={{ opacity: 0, scale: 3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1  }}
            alt="cwd logo"
            className="h-auto w-auto"
          />
          {/* <img src="/cwd-logo.png" alt="cwd logo" className="h-auto w-auto" /> */}
          <p className="-mt-20 border border-[#fb9927]/70 p-5 text-3xl font-bold text-[#1b1b1b]">
            Knowledge Beyond YouTube
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
