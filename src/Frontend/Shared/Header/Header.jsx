import React from "react";
import Menus from "./Menus";
import TopHeader from "./TopHeader";
import { NavLink } from "react-router-dom";
// import { createWorker } from 'tesseract.js';
const Header = () => {

// 	(async () => {
//   const worker = await createWorker('eng');
//   const ret = await worker.recognize('images/help.png');
//   console.log(ret.data.text);
//   await worker.terminate();
// })();

  return (
    <>
	 {/* <div id="spinner" className="show position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-grow text-primary" role="status"></div>
        </div> */}
	 <div className="container-fluid bg-dark py-2 d-none d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info">
                        <small className="me-3 text-white-50"><a href="#"><i className="fas fa-map-marker-alt me-2 text-secondary"></i></a>Trinetra Enclave Greater Noida (U.P.)</small>
                        <small className="me-3 text-white-50"><a href="#"><i className="fas fa-envelope me-2 text-secondary"></i></a>pixelprotechnologies2024@gmail.com </small>
                    </div>
                   
                    <div className="top-link">
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                    </div>
                </div>
            </div>
        </div>
     <div className="container-fluid bg-primary">
            <div className="container">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <a href="/" className="navbar-brand">
                        <h1 className="text-white fw-bold d-block">Thinkfor<span className="text-secondary">Digital</span> </h1>
						
                    </a>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <NavLink to="/" className="nav-item nav-link active text-secondary">Home</NavLink>
                            <NavLink to="/aboutus" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/services" className="nav-item nav-link">Services</NavLink>
                           
                            <NavLink to="/contact" className="nav-item nav-link">Contact Us</NavLink>
  <NavLink to="/portfolio" className="nav-item nav-link">Portfolio</NavLink>
                 <NavLink to="/training" className="nav-item nav-link">Training</NavLink>           
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <a href="" className="position-relative animated tada infinite">
                                <i className="fa fa-phone-alt text-white fa-2x"></i>
                                <div className="position-absolute" style={{top: "-7px", left: "20px"}}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex flex-column pe-4 border-end">
                            <span className="text-white-50">Have any questions?</span>
                            <span className="text-secondary">Call: +91 701-199-6055</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center ms-4 ">
                            <a href="#"><i className="bi bi-search text-white fa-2x"></i> </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>
  );
};

export default Header;
