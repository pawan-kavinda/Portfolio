import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Work from "./Components/Work";
import ExtraCurricular from "./Components/ExtraCurricular";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import GC from "./Pages/GC";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AI from "./Pages/AI";
import SM from "./Pages/SM";
import EMS from "./Pages/EMS";
import FS from "./Pages/FS";
import Takso from "./Pages/Takso";
import { useRef, useEffect } from "react";
import Dialog from "./Pages/Dialog";
import PodiBusiness from "./Pages/PodiBusiness";
import AgentAI from "./Pages/AgentAI";
import VotingSystem from "./Pages/VotingSystem";
import ScrollToTop from "./Utils/scroll-top.utils";
import Blogger from "./Pages/Blogger";
import SalaryCalculator from "./Pages/SalaryCalculator";
import YourPortfolio from "./Pages/YourPortfolio";
function App() {
  return (
    <BrowserRouter scrollRestoration="auto">
      <div>
        {/* Main Routes */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/supermarket" element={<SM />} />
          <Route path="/agent-ai" element={<AgentAI />} />
          <Route path="/ems" element={<EMS />} />
          <Route path="/groupchat" element={<GC />} />
          <Route path="/foodstore" element={<FS />} />
          <Route path="/takso" element={<Takso />} />
          <Route path="/dialog-genie" element={<Dialog />} />
          <Route path="/podi-business" element={<PodiBusiness />} />
          <Route path="/clean-control" element={<SM />} />
          <Route path="/salary-calculator" element={<SalaryCalculator />} />
          <Route path="/voting-system" element={<VotingSystem />} />
          <Route path="/blogger" element={<Blogger />} />
          <Route path="/your-portfolio" element={<YourPortfolio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function MainPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Work />
      <Education />
      <ExtraCurricular />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
