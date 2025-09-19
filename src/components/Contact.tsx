import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="bg-[#102820] px-6 py-16 font-[Neue]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {/* Left: Image with play button */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/contact-hero.jpg" // ← replace with your asset
              alt="Call with our team"
              className="h-full w-full object-cover"
            />
            {/* Play button */}
          </div>

          {/* Right: Card */}
          <div className="h-full rounded-2xl bg-white p-8 shadow-lg md:p-10">
            <h3 className="text-3xl font-semibold text-[#102820]">
             Get In Touch
            </h3>

            <div className="mt-8 space-y-7 text-gray-700">
              {/* Email */}
              <div>
                <div className="text-xl font-semibold text-gray-900">Email :</div>
                <p className="mt-1 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info.blaqmagicstudios@gmail.com
                </p>
              </div>

              {/* Address */}
              <div>
                <div className="text-xl font-semibold text-gray-900">Address :</div>
                <p className="mt-1">
                  Lagos <br />
                  Nigeria
                </p>
              </div>

              {/* Extra: Phone / Instagram (optional) */}
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +234 816 490 1823
                </p>
                <p className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  @kingdavidblaq
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center rounded-md bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white"
              >
                Linkedin
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
