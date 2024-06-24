import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { Home } from "./pages/Home";
import { SimulationPage } from "./pages/Simulation";
import { GamePage } from "./pages/Game";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulation" element={<SimulationPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
