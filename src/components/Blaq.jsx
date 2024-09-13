import React from "react";
import { motion } from "framer-motion";

function Blaq() {
  return (
    <section id="blaq" className="flex overflow-hidden font-[Neue] h-full justify-center bg-black">
      <div className="m-8 gap-1 md:gap-4 grid grid-cols-1 items-center md:py-20 md:grid-cols-2">
        <div className="relative">
          <div className="absolute -right-9 -top-8 sm:right-10 md:-right-10 lg:right-10">
            <motion.img
              src="/Asterisk 2 (2).svg"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-20 w-20 md:h-24 md:w-24"
            />
          </div>
          <img
            src="/IMG_6533.png"
            alt="Speaker"
            className="m-auto rounded-lg"
          />
        </div>
        <div >
          <h3 className="mt-4 text-xl font-bold text-white md:mt-0">
            Our Mandate
          </h3>
          <p className="mt-2 text-xs md:text-lg text-justify text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            impedit ex dolorem optio facilis quo quis excepturi eum molestias,
            quidem obcaecati aliquam iusto necessitatibus iste expedita numquam
            quae itaque nihil?
          </p>
          <h3 className="mt-6 text-xl font-bold text-white">Our Mandate</h3>
          <p className="mt-2 text-xs md:text-lg text-justify text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            impedit ex dolorem optio facilis quo quis excepturi eum molestias,
            quidem obcaecati aliquam iusto necessitatibus iste expedita numquam
            quae itaque nihil?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blaq;
