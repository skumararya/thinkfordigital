import React from "react";
import { Link } from "react-router-dom";
import InnerBannerBreadCrumb from "../Shared/InnerBannerBreadCrumb";

 const UnderDevelopment = () => {
  return (
    <>
    <InnerBannerBreadCrumb pageTitle={"Coming Soon"} title2={"Coming Soon"}/>
      {/* <div className="inner-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="b-title">
                <h1 className="page-headerOLD">Coming Soon</h1>
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
                    <Link to="/">Home</Link>
                  </li>
                  <li>Coming Soon</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default UnderDevelopment
