import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between bg-white px-3 font-[Neue] md:px-5">
        <div>
          <Link to="/">
            <img src="/cwd-logo.png" alt="cwd logo" className="w-16 md:w-20" />
          </Link>
        </div>
        <div className="flex gap-3 text-xs md:gap-5 md:text-xl">
          <Link to="/">Home</Link>
          <a href="#blaq ">DavidBlaq</a>
          <a href="#speakers">Speakers</a>
        </div>
        <div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdTNgMBhHTyHymSJrlNH0ujgHcGWJII-3E-kPiSXwUyyHHPzQ/viewform"
            target="_blank"
            className="rounded-full bg-[#2f6e00] px-3 py-2 text-xs text-white md:px-5 md:py-3 md:text-lg"
          >
            Register Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
