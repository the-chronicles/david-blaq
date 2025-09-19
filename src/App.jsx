import { BrowserRouter, Route, Routes } from "react-router-dom";
import Camp from "./pages/Camp";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/camp" element={<Camp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
