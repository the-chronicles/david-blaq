import React from "react";
import { Link } from "react-router-dom";

function Campdb() {
  return (
    <section id="#campdb" className="bg-[#faf0c8] p-16 font-[Neue]">
      <div className="container mx-auto">
        <div className="text-4xl md:text-7xl font-bold text-[#102820]">
          Camp With David Blaq
        </div>

        <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-2xl md:text-3xl font-semibold text-[#102820]">
              Knowledge Beyond Youtube (2025)
            </div>
            <p className="mt-5 text-xl text-justify text-[#102820]">
              Camp with David Blaq is a 3-day immersive bootcamp designed for
              creatives who want to refine their craft, gain practical
              experience, and connect with other professionals. The camp
              combines hands-on workshops, industry insights, and networking
              opportunities. Since its inception, it has inspired and equipped
              dozens of creatives to pursue their careers with confidence.
            </p>
          </div>

          <div className="space-y-3 bg-[#ffffff] p-5 m-auto rounded-xl shadow-md shadow-[#102820]/25">
            <div className="text-2xl font-semibold text-[#102820]">
              October 2025
            </div>
            <p className="text-xl font-bold text-[#102820]">₦200,000</p>
            <p className="text-[#102820]">
              Fee covers accommodation and training. Feeding excluded.
            </p>

            {/* Button */}
            <Link
              to="/camp"
              className="inline-block rounded-md bg-[#102820] px-5 py-2 text-white transition hover:bg-[#1a3a28]"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Campdb;
