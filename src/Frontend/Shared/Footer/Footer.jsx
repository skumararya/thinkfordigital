import React from "react";
import FooterBottom from "./FooterBottom.jsx"; 
import FooterNav from "./FooterNav.jsx";       
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <>
   <div class="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div class="container pt-5 pb-4">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <a href="index.html">
                            <h1 class="text-white fw-bold d-block"><span class="text-secondary">ThinkForDigital</span> </h1>
                        </a>
                        <p class="mt-4 text-light">We help businesses grow with powerful software development, mobile apps, and result-driven digital marketing strategies.</p>
                        <div class="d-flex hightech-link">
                            <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-facebook-f text-primary"></i></a>
                            <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-twitter text-primary"></i></a>
                            <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-instagram text-primary"></i></a>
                            <a href="" class="btn-light nav-fill btn btn-square rounded-circle me-0"><i class="fab fa-linkedin-in text-primary"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <a href="#" class="h3 text-secondary">Short Link</a>
                        <div class="mt-4 d-flex flex-column short-link">
                            <Link to="aboutus" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>About us</Link>
                             <Link to="" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Contact us</Link>
                             <Link to="services" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Our Services</Link>
                             
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <a href="#" class="h3 text-secondary">Help Link</a>
                        <div class="mt-4 d-flex flex-column help-link">
                          
                            <Link to="contact" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Contact</Link>
                            <Link to="/" class="mb-2 text-white"><i class="fas fa-angle-right text-secondary me-2"></i>Our Projects</Link>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <a href="#" class="h3 text-secondary">Contact Us</a>
                        <div class="text-white mt-4 d-flex flex-column contact-link">
                            <a href="#" class="pb-3 text-light border-bottom border-primary"><i class="fas fa-map-marker-alt text-secondary me-2"></i>  73 Trinetra Enclave Greater Noida (U.P.)</a>
                            <a href="#" class="py-3 text-light border-bottom border-primary"><i class="fas fa-phone-alt text-secondary me-2"></i> +91 701-199-6055</a>
                            <a href="#" class="py-3 text-light border-bottom border-primary"><i class="fas fa-envelope text-secondary me-2"></i> info.thinkfordigital@gmail.com </a>
                        </div>
                    </div>
                </div>
                <hr class="text-light mt-5 mb-4" />
                <div class="row">
                    <div class="col-md-6 text-center text-md-start">
                        <span class="text-light"><a href="#" class="text-secondary"><i class="fas fa-copyright text-secondary me-2"></i>SS Innovation</a>, All right reserved.</span>
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <span class="text-light">Designed By <a href="https://htmlcodex.com" class="text-secondary">thinkfordigital</a></span>
                    </div>
                </div>
            </div>
        </div>
   </>
  );
};

export default Footer;