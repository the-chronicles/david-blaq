import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <section className="relative flex h-full flex-col items-center justify-center bg-gradient-to-b from-[#F2FAF8] to-white text-center">
        <div>
          <div className="absolute -top-2 right-1">
            <img
              src="/Lightning 1.svg"
              alt=""
              className="h-24 w-24 animate-spin"
            />
          </div>

          <div className="absolute bottom-5 left-0">
            <img
              src="/Asterisk 2.svg"
              alt=""
              className="h-24 w-24 animate-spin transition-all ease-in"
            />
          </div>
        </div>

        <div className="mb-28">
          <motion.img
            src="/cwd-logo.png"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
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
