import React from "react";

import Services from "../HomeRepo/EventsSection/Services";

import MainSliderSection from "../HomeRepo/MainSliderSection/MainSliderSection";
import OurCources from "../HomeRepo/OurCources";

import Welcome from "../HomeRepo/welcome/Welcome";
import Address from "../HomeRepo/Address";

const Home = () => {


  return (
    <>
   
    <MainSliderSection />
    <Welcome />
    
    <Services />
    {/* <OurCources /> */}

<Address />

    </>
  );
};
export default Home;
