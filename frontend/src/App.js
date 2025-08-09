import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Education from "./Components/Education";
import GC from "./Pages/GC";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import AI from "./Pages/AI";
import SM from "./Pages/SM";
import EMS from "./Pages/EMS";
import FS from "./Pages/FS";
import Takso from "./Pages/Takso";
import {useRef,useEffect } from "react";
import Dialog from "./Pages/Dialog";


function App() {
  return (
    <BrowserRouter  scrollRestoration="auto">
      <div>
        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/supermarket" element={<SM />} />
          <Route path="/ems" element={<EMS />} />
          <Route path="/groupchat" element={<GC />} />
          <Route path="/foodstore" element={<FS />} />
          <Route path="/takso" element={<Takso />} />
          <Route path="/dialog-genie" element={<Dialog />} />
          <Route path="/podi-business" element={<SM />} />
          <Route path="/clean-control" element={<SM />} />
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
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
