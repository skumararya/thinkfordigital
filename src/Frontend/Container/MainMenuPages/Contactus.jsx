import React from 'react'
import InnerBanner from '../../Shared/inner banner/InnerBanner'
import { Helmet } from "react-helmet-async";
const Contactus = () => {
  return (
    <>

    <Helmet>
        <title>Contact Us | ThinkForDigital</title>

        <meta
          name="description"
          content="Contact ThinkForDigital for web design, development, and digital marketing services. Call or email us for business inquiries."
        />

        <link rel="canonical" href="https://thinkfordigital.com/contact-us" />
      </Helmet>

    <InnerBanner 
      pageTitle="Contact Us"
  breadcrumb1="Home"
  breadcrumb1Link="/"
  breadcrumb2="Contact"
    />  
     <div class="container-fluid py-5 mb-5">
            <div class="container">
                <div class="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" >
                    <h5 class="text-primary">Get In Touch</h5>
                    <h1 class="mb-3">Contact for any query</h1>
                </div>
                <div class="contact-detail position-relative p-4 p-md-5">
                    <div class="row g-5 mb-5 justify-content-center">
                        <div class="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s" >
                            <div class="d-flex bg-light p-3 rounded">
                                <div class="flex-shrink-0 btn-square bg-secondary rounded-circle" >
                                    <i class="fas fa-map-marker-alt text-white"></i>
                                </div>
                                <div class="ms-3">
                                    <h4 class="text-primary">Address</h4>
                                    <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" class="h5">Trinetra Enclave Greater Noida (U.P.)</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s" >
                            <div class="d-flex bg-light p-3 rounded">
                                <div class="flex-shrink-0 btn-square bg-secondary rounded-circle" >
                                    <i class="fa fa-phone text-white"></i>
                                </div>
                                <div class="ms-3">
                                    <h4 class="text-primary">Call Us</h4>
                                    <a class="h5" href="tel:+0123456789" target="_blank">+91 701-199-6055</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s" >
                            <div class="d-flex bg-light p-3 rounded">
                                <div class="flex-shrink-0 btn-square bg-secondary rounded-circle" >
                                    <i class="fa fa-envelope text-white"></i>
                                </div>
                                <div class="ms-3">
                                    <h4 class="text-primary">Email Us</h4>
                                    <a class="h5" href="mailto:info.thinkfordigital@gmail.com" target="_blank">info.thinkfordigital@gmail.com
</a>
                                </div>
                            </div>
                        </div>
                    </div>
					
                    <div class="row g-5">
                        <div class="col-lg-12 wow fadeIn" data-wow-delay=".3s" >
                            <div class="p-4 p-md-5 h-100 rounded contact-map">
                                <iframe class="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.9571626499655!2d77.4451182752886!3d28.62240497567028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef007005a9f1%3A0xe403a3a3b81b370f!2s73%20Trinetra%20enclaves%2C%20main%20churaha!5e1!3m2!1sen!2sin!4v1770874656206!5m2!1sen!2sin" style={{border:"0", minHeight:"300px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div> 
        </div>  
    </>
  )
}

export default Contactus
