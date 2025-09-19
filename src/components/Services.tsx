import React from "react";
import { Video, Camera, Film, PenTool, User } from "lucide-react";

function Services() {
  return (
    <section id="services" className="bg-[#102820] p-16 font-[Neue]">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl text-white md:text-7xl">Services</h2>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card */}
          <div className="flex h-52 flex-col items-center justify-center gap-2 rounded-md bg-[#faf0c8] p-6">
            <Film className="h-10 w-10 text-[#102820]" />
            <span className="text-lg  md:text-3xl text-[#102820]">
              Cinematography & Filmmaking
            </span>
          </div>

          <div className="flex h-52 flex-col items-center justify-center gap-2 rounded-md bg-[#faf0c8] p-6">
            <Video className="h-10 w-10 text-[#102820]" />
            <span className="text-lg  md:text-3xl text-[#102820]">
              Event & Wedding Coverage
            </span>
          </div>

          <div className="flex h-52 flex-col items-center justify-center gap-2 rounded-md bg-[#faf0c8] p-6">
            <Camera className="h-10 w-10 text-[#102820]" />
            <span className="text-lg  md:text-3xl text-[#102820]">
              Documentary Production
            </span>
          </div>

          <div className="flex h-52 flex-col items-center justify-center gap-2 rounded-md bg-[#faf0c8] p-6">
            <PenTool className="h-10 w-10 text-[#102820]" />
            <span className="text-lg  md:text-3xl text-[#102820]">
              Creative Direction
            </span>
          </div>

          <div className="flex h-52 flex-col items-center justify-center gap-2 rounded-md bg-[#faf0c8] p-6">
            <User className="h-10 w-10 text-[#102820]" />
            <span className="text-lg  md:text-3xl text-[#102820]">
              Training & Mentorship
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
