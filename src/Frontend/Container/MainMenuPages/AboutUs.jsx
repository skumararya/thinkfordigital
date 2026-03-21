import React from "react";
import InnerBanner from "../../Shared/inner banner/InnerBanner";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {


  return (
    <>
     <Helmet>
        <title>About Us | Think For Digital</title>
        <meta
          name="description"
          content="Learn about Think For Digital, a web development and digital marketing company helping businesses grow online."
        />
        <link rel="canonical" href="https://thinkfordigital.com/about" />
      </Helmet>


    <InnerBanner 
  pageTitle="About Us"
  breadcrumb1="Home"
  breadcrumb1Link="/"
  breadcrumb2="About"
    />
     <div class="container-fluid py-5 my-5">
            <div class="container pt-5">
                <div class="row g-5">
                    <div class="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                        <div class="h-100 position-relative">
                            <img src="images/about-1.jpg" class="img-fluid w-75 rounded" alt="" style={{marginBottom: "25%;"}} />
                            <div class="position-absolute w-75" style={{top: "25%", left: "25%;"}}>
                                <img src="images/about-2.jpg" class="img-fluid w-100 rounded" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                        <h5 class="text-primary">About Us</h5>
                        <h1 class="mb-4">We build digital solutions that drive real results</h1>
                        <p>Best IT Solutions is a full-service technology agency dedicated to helping businesses of all sizes thrive in the digital age. From startups to enterprises, we craft tailored software, mobile, and marketing solutions that are built to perform.</p>
                        <p>
                            Our team of experienced developers, designers, and marketers work collaboratively to deliver products that are not only functional and scalable — but also intuitive and impactful. We believe great technology should be accessible, efficient, and aligned with your business goals.
                        </p>
                      
                    </div>
                </div>
            </div>
        </div> 
    </>
  );
};

export default AboutUs;
