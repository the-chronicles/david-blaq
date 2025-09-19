import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CountdownTimer from '../components/CountdownTimer'
import Blaq from '../components/Blaq'
import Footer from '../components/Footer'
import Speakers from '../components/Speakers'

function Camp() {
  return (
    <>
     <Navbar />
      <Hero />
      <CountdownTimer />
      <Blaq />
      <Speakers />
      <Footer />
    </>
  )
}

export default Camp