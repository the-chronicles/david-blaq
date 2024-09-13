import React from 'react' 

function Navbar() {
  return (
    <header >
          <nav className="flex items-center justify-between font-[Neue] bg-white px-3 md:px-5">
          <div>
            <img src="/cwd-logo.png" alt="cwd logo" className="w-16 md:w-20" />
          </div>
            <div className="flex gap-3 md:gap-5 text-xs md:text-xl">
              <a href="#blaq ">
                DavidBlaq
              </a>
              <a href="#speakers">
                Speakers
              </a>
            </div>
            <div>
              <a
                href="https://bit.ly/3zbql94"
                className="rounded-full  bg-[#2f6e00] px-3 py-2 md:px-5 md:py-3 text-xs md:text-lg text-white"
              >
                Register Now
              </a>
            </div>
          </nav>
        </header>
  )
}

export default Navbar