import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Feedback from "./Pages/Feedback";
import SiteMap from "./Pages/SiteMap";
import LivingRoom from "./Pages/livingRoom";
import Kitchen from "./Pages/Kitchen";
import Bedroom from "./Pages/Bedroom";
import Bathroom from "./Pages/Bathroom";
import Contemporarystyle from "./Pages/Contemporarystyle";
import Elegantstyle from "./Pages/Elegantstyle";
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
                  <Route path="LivingRoom" element={<LivingRoom />} />
                   <Route path="Kitchen" element={<Kitchen />} />
                    <Route path="Bedroom" element={<Bedroom />} />
                      <Route path="Bathroom" element={<Bathroom />} />
                      <Route path="Elegantstyle" element={<Elegantstyle />} />
                     
                
                      <Route path="Contemporarystyle" element={<Contemporarystyle />} />



                      
              

       
              
         
              
               
           
          </Routes>
        </main>
      
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
