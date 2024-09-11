import React from "react";

function Hero() {
  return (
    <>
      <section className="relative flex h-full flex-col items-center justify-center bg-gradient-to-b from-[#F2FAF8] to-white text-center">
        <div>
          <div className="absolute -top-2 right-1">
            <img src="/Lightning 1.svg" alt="" className="h-24 w-24" />
          </div>

          <div className="absolute bottom-5 left-0">
            <img src="/Asterisk 2.svg" alt="" className="h-24 w-24" />
          </div>
        </div>

        <div className='mb-28'>
          <img src="/cwd-logo.png" alt="cwd logo" className="h-auto w-auto" />
          <p className="-mt-20 border border-[#fb9927]/70 p-5 text-3xl font-bold text-[#1b1b1b]">
            Knowledge Beyond YouTube
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
