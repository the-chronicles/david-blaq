// import { motion } from "framer-motion";

function Blaq() {
  return (
    <section id="blaq" className="bg-[#faf0c8] p-16 font-[Neue]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-5 md:gap-0 md:grid-cols-2">
          <img src="/IMG_6533.png" alt="Speaker" className="rounded-lg" />
          {/* <div className="relative"> */}
          {/* <div className="absolute -right-9 -top-8 sm:right-10 md:-right-10 lg:right-10">
            <motion.img
              src="/Asterisk 2 (2).svg"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-20 w-20 md:h-24 md:w-24"
            />
          </div> */}
          {/* <img
            src="/IMG_6533.png"
            alt="Speaker"
            className="m-auto rounded-lg"
          /> */}
          {/* </div> */}
          <div>
            <h3 className="text-4xl md:text-7xl font-bold text-[#102820]">David Blaq</h3>
            <p className="mt-6 text-justify text-sm text-[#102820] md:text-lg">
              Davidblaq – Cinematographer | Creative Director l Film Maker |
              Visual Storyteller Davidblaq is a Lagos based cinematographer,
              film director, and all-round visual creative, known for crafting
              powerful visual experiences across live music productions,
              documentaries, fashion films, and weddings. With a deep passion
              for storytelling and a refined eye for detail, he brings raw
              emotion and cinematic elegance into every frame. <br /> <br />
              Through his lens, Davidblaq has captured the energy of live
              concerts, the intimacy of weddings, and the soul of real life
              stories infusing each project with authenticity, purpose, and
              artistic flair. He is the visionary behind CampWithDavidBlaq, a
              creative retreat that began in 2024 to inspire and equip emerging
              creatives with the tools, mindset, and community to thrive. <br />{" "}
              <br />
              Whether he’s on set directing performances or mentoring the next
              wave of storytellers, Davidblaq shows up with purpose to document
              life, spark transformation, and leave a lasting visual legacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blaq;
