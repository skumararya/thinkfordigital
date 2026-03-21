import React from "react";
import { Route, Routes } from "react-router-dom";

// --- Main Menu Pages ---
import Home from "./Container/MainMenuPages/Home.jsx";
import AboutUs from "./Container/MainMenuPages/AboutUs.jsx";
import ServicesMenu from "./Container/MainMenuPages/ServicesMenu.jsx";
import Contactus from "./Container/MainMenuPages/Contactus.jsx";
import ProjectDetail from "./Container/MainMenuPages/ProjectDetail.jsx";
import ProjectDetailPage from "./Container/MainMenuPages/ProjectDetailPage.jsx";
import Portifolio from "./Container/MainMenuPages/Portifolio.jsx";
import Training from "./Container/MainMenuPages/Training.jsx";


const AppRouting = () => {
  return (
    <Routes>
      {/* --- Main & Department Profile Routes --- */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
       <Route path="/services" element={<ServicesMenu />} />
      <Route path="/contact" element={<Contactus />} /> 
       <Route path="/projectdetail/:slug" element={<ProjectDetailPage />} /> 
       <Route path="/portfolio/projectdetail/:slug" element={<ProjectDetailPage />} /> 
       <Route path="/portfolio" element={<Portifolio />} /> 
       <Route path="/training" element={<Training />} /> 
       
    </Routes>
  );
};

export default AppRouting;