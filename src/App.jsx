import Blaq from "./components/Blaq";
import CountdownTimer from "./components/CountdownTimer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";

function App() {
  return (
    <>
      {/* <div className="h-screen relative"> */}
      {/* <div className="flex min-h-screen flex-col justify-between items-center"> */}
      <Navbar />
      <Hero />
      <CountdownTimer />
      <Blaq />
      <Speakers />
      <Footer />

      {/* </div> */}
      
    </>
  );
}

export default App;
