import React, { useState } from "react";
import Viewer from "react-viewer";
import { NavLink } from "react-router-dom";

function PastEvents() {
  const [visible, setVisible] = React.useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="inner-bg ">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="b-title">
                <h1 className="page-headerOLD">Event Photo Gallery</h1>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 p-0">
              <nav
                className="breadcrumb"
                role="navigation"
                aria-labelledby="system-breadcrumb"
              >
                <ol>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>Event Photos</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* main section */}
      <div className="artistpedia-bg">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-12 col-sm-12 col-md-12 white-bg ">
              <div className="row p-1">
                <div className="col-12 col-sm-12 col-md-12 col-lg-4 ">
                  <div className="second-heading">
                    <h2>Event Photo Gallery</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="Sculptor-title  text-center">
                <h2>Event Photos</h2>
                <div className="sub-underline"></div>
              </div>
            </div>
          </div>
          <div className="row artistpedia-wraper">
            {/* first */}
            <div className="col-12 col-sm-12 col-md-4 mt-4">
              <div id="artispedia" className="owl-carousel owl-theme">
                <a
                  onClick={() => {
                    setVisible(true);
                    setActiveIndex();
                  }}
                >
                  <img src="images/fg1.jpg" />
                  <div class="inner  details ">
                    <i class="mdi mdi-magnify"></i>
                  </div>
                </a>
              </div>
              {/* <div className="artistpedia-footer">
                    <h2>Photo 1</h2>
                    <a
                      href="javascript:void(0)"
                      className="btn- artispedia-btn button_1"
                    >
                      <span className="mdi mdi-arrow-right"></span>
                    </a>
                  </div> */}

              <Viewer
                visible={visible}
                onClose={() => {
                  setVisible(false);
                }}
                onMaskClick={() => {
                  setVisible(false);
                }}
                // zoomSpeed={0.2}
                //images={viewerHandler()}
                activeIndex={activeIndex}
                rotatable={false}
                zoomable={false}
                scalable={false}
                attribute={false}
                // noFooter={true}
                // noClose={true}
                // downloadable
              />
            </div>

            {/* second */}
            <div className="col-12 col-sm-12 col-md-4 mt-4">
              <div id="artispedia" className="owl-carousel owl-theme">
                <a href="javascript:void(0)">
                  <img src="images/fg2.jpg" />
                  <div class="inner  details ">
                    <i class="mdi mdi-magnify"></i>
                  </div>
                </a>
              </div>
            </div>

            {/* third */}
            <div className="col-12 col-sm-12 col-md-4 mt-4">
              <div id="artispedia" className="owl-carousel owl-theme">
                <a href="javascript:void(0)">
                  <img src="images/fg3.jpg" />
                  <div class="inner  details ">
                    <i class="mdi mdi-magnify"></i>
                  </div>
                </a>
              </div>
            </div>

            {/* forth */}
            <div className="col-12 col-sm-12 col-md-4 mt-4">
              <div id="artispedia" className="owl-carousel owl-theme">
                <a href="javascript:void(0)">
                  <img src="images/fg4.jpg" />
                  <div class="inner  details ">
                    <i class="mdi mdi-magnify"></i>
                  </div>
                </a>
              </div>
            </div>

            {/* fifth */}
            <div className="col-12 col-sm-12 col-md-4 mt-4">
              <div id="artispedia" className="owl-carousel owl-theme">
                <a href="javascript:void(0)">
                  <img src="images/fg5.jpg" />
                  <div class="inner  details ">
                    <i class="mdi mdi-magnify"></i>
                  </div>
                </a>
              </div>
            </div>

            {/* sixth */}
            <div className="col-12 col-sm-12 col-md-4 mt-4">
              <div id="artispedia" className="owl-carousel owl-theme">
                <a href="javascript:void(0)">
                  <img src="images/fg6.jpg" />
                  <div class="inner  details ">
                    <i class="mdi mdi-magnify"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PastEvents;
