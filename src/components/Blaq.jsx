import React from 'react'

function Blaq() {
  return (
    <section id="blaq" className="flex h-full justify-center bg-black">
        <div className="grid grid-cols-1 m-5 items-center py-20 md:grid-cols-2 ">
          <img
            src="/IMG_6533.png"
            alt="Speaker"
            className="m-auto rounded-lg"
          />
          <div>
            <h3 className="text-xl font-bold mt-4 md:mt-0 text-white">Our Mandate</h3>
            <p className="mt-2 text-white text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              impedit ex dolorem optio facilis quo quis excepturi eum molestias,
              quidem obcaecati aliquam iusto necessitatibus iste expedita
              numquam quae itaque nihil?
            </p>
            <h3 className="text-xl font-bold mt-6 text-white">Our Mandate</h3>
            <p className="mt-2 text-white text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
              impedit ex dolorem optio facilis quo quis excepturi eum molestias,
              quidem obcaecati aliquam iusto necessitatibus iste expedita
              numquam quae itaque nihil?
            </p>
          </div>
        </div>
      </section>
  )
}

export default Blaq