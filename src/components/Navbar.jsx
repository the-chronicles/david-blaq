import React from 'react' 

function Navbar() {
  return (
    <header >
          <nav className="flex items-center justify-between bg-white px-3 md:px-5">
          <div>
            <img src="/cwd-logo.png" alt="cwd logo" className="w-20" />
          </div>
            <div className="flex">
              <a href="#blaq" className="mr-4">
                DavidBlaq
              </a>
              <a href="#speakers" className="mr-4">
                Speakers
              </a>
            </div>
            <div>
              <a
                href="#register"
                className="rounded-full bg-[#2f6e00] px-2 py-0 md:px-4 md:py-2 text-white"
              >
                Register Now
              </a>
            </div>
          </nav>
        </header>
  )
}

export default Navbar