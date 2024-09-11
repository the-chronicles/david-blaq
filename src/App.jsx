import Blaq from "./components/Blaq";
import CountdownTimer from "./components/CountdownTimer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";

function App() {
  return (
    <>
      {/* <div className="h-screen relative flex flex-col justify-center items-center"> */}
      {/* <div className="flex min-h-screen flex-col justify-between items-center"> */}
      <Navbar />
      <Hero />
      <CountdownTimer />
      <Blaq />
      <Speakers />
      <Footer />

      {/* </div> */}

      {/* <iframe class="w-full aspect-video" src="https://youtu.be/1-sNJs-MFYo?si=y0OW8411-9cMhaF8"></iframe> */}
      
    </>
  );
}

export default App;
