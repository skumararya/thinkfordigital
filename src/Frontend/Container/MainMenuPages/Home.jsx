import React from "react";
import { Helmet } from "react-helmet-async";
import Services from "../HomeRepo/EventsSection/Services";

import MainSliderSection from "../HomeRepo/MainSliderSection/MainSliderSection";
import OurCources from "../HomeRepo/OurCources";

import Welcome from "../HomeRepo/welcome/Welcome";
import Address from "../HomeRepo/Address";

const Home = () => {
 <Helmet>
        <title>ThinkForDigital | Web Design & Digital Marketing Company</title>

        <meta
          name="description"
          content="ThinkForDigital provides professional web design,summer training, development, SEO, and digital marketing services to grow your business online."
        />

        <meta
          name="keywords"
          content="web design, digital marketing, summer training, SEO services, website development company India"
        />

        <link rel="canonical" href="https://thinkfordigital.com/" />

        {/* Open Graph (for social sharing) */}
        <meta property="og:title" content="ThinkForDigital" />
        <meta
          property="og:description"
          content="Grow your business with expert web design and digital marketing services."
        />
        <meta property="og:url" content="https://thinkfordigital.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

  return (
    <>
    <h1 className="d-none">
       web design, digital marketing, summer training, SEO services, website development company India
      </h1>

    <MainSliderSection />
    <Welcome />
    
    <Services />
    {/* <OurCources /> */}

<Address />

    </>
  );
};
export default Home;
