import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MainSliderSection = () => {


  return (
    <>
     <div class="container-fluid px-0 home-slider">
            <div id="carouselId" class="carousel slide " data-bs-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <img src="images/carousel-1.jpg" class="img-fluid" alt="First slide" />
                        <div class="carousel-caption">
                            <div class="container carousel-content">
                                <h6 class="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                <h1 class="text-white display-1 mb-4 animated fadeInRight">An Innovative IT Solutions Agency</h1>
                                <p class="mb-4 text-white fs-5 animated fadeInDown">We help businesses grow with powerful software development, mobile apps, and result-driven digital marketing strategies.</p>
                                <Link to="aboutus" class="me-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></Link>
                                <Link to="contact" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></Link>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="images/carousel-2.jpg" class="img-fluid" alt="Second slide" />
                        <div class="carousel-caption">
                            <div class="container carousel-content">
                                <h6 class="text-secondary h4 animated fadeInUp">Best IT Solutions</h6>
                                <h1 class="text-white display-1 mb-4 animated fadeInLeft">Quality Digital Services You Really Need!</h1>
                                <p class="mb-4 text-white fs-5 animated fadeInDown">We help businesses grow with powerful software development, mobile apps, and result-driven digital marketing strategies.</p>
                                <Link to="aboutus" class="me-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></Link>
                                <Link to="contact" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </>
  );
};

export default MainSliderSection;
