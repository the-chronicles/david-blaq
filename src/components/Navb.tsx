import React from "react";
import { Link } from "react-router-dom";

function Navb() {
  return (
    <header>
      <nav className="flex items-center justify-between bg-[#102820] text-[#faf0c8] p-6 font-[Neue] md:px-10">
        <div className="text-lg">
          David Blaq
        </div>
        <div className="flex gap-3 text-xs md:gap-5 md:text-lg">
          <Link to="/">Home</Link>
          <a href="#speakers">Portfolio</a>
          <Link to="/camp">Camp</Link>
          <a href="#services">Services</a>
          <a href="#speakers">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navb;
