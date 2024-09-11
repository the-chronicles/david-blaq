import Blaq from "./components/Blaq";
import CountdownTimer from "./components/CountdownTimer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      {/* <div className="h-screen relative flex flex-col justify-center items-center"> */}
      {/* <div className="flex min-h-screen flex-col justify-between items-center"> */}
      <Navbar />
      <Hero />
      <CountdownTimer />
      <Blaq />

      {/* </div> */}
    </>
  );
}

export default App;
