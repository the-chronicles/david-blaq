import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // install lucide-react for icons

function Navb() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="flex items-center justify-between bg-[#102820] text-[#faf0c8] p-6 font-[Neue] md:px-10 relative">
        {/* Logo */}
        <div className="text-lg font-bold">David Blaq</div>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu Links */}
        <div
          className={`absolute top-full left-0 w-full bg-[#102820] flex flex-col gap-4 p-6 md:static md:flex md:flex-row md:gap-5 md:p-0 md:w-auto transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="#speakers" onClick={() => setIsOpen(false)}>Portfolio</a>
          <Link to="/camp" onClick={() => setIsOpen(false)}>Camp</Link>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#speakers" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Navb;
