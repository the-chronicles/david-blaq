import React from "react";

function Footer() {
  return (
    <footer className="h-full bg-black">
      <section className="bg-black py-12 text-white">
        <div className="container mx-auto flex flex-col items-center justify-between px-6 md:flex-row">
          <div className="flex w-full flex-col space-y-4 md:w-1/2">
            <h1 className="text-6xl font-extrabold">SAVE YOUR SPOT</h1>
            <p className="text-xl">
              Experience nature, adventure, and community. Join us for
              unforgettable moments in the great{" "}
              <span className="text-[#2f6e00] font-bold">CAMP WITH DAVIDBLAQ</span>
            </p>

            <div className="flex space-x-4">
              <div className="border-[#2f6e00] border-2 px-4 py-2 text-white">
                22ND -24TH SEPTEMBER 2024
              </div>
              <div className=" border-[#0E2930] border-2 px-4 py-2 text-white">
                9AM PROMPT
              </div>
            </div>
          </div>

          <div className="mt-8 flex w-full flex-col items-center justify-center md:mt-0 md:w-1/2">
            <div className="h-64 w-96 overflow-hidden">
              <iframe
                className="h-full w-full rounded-3xl border-2"
                src="https://www.youtube.com/embed/JyU0n748MdM?si=AqD4EVKn7Zm3XRAwD"
                title="Entry Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <a
              href="https://bit.ly/3zbql94"
              target="_blank"
              className="mt-6 rounded-full bg-[#2f6e00] px-8 py-3 text-white"
            >
              Register Now
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
