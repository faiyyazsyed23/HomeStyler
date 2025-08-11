import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Feedback from "./Pages/Feedback";
import SiteMap from "./Pages/SiteMap";
import Contact from "./Pages/Contact";






function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Feedback" element={<Feedback />} />
               <Route path="SiteMap" element={<SiteMap />} />
                 <Route path="Contact" element={<Contact />} />
              

       
              
         
              
               
           
          </Routes>
        </main>
      
      </div>
    </Router>
  );
}

export default App;
