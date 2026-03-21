import React from "react";
import { Link } from "react-router-dom";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb";

const Who = () => {
  return (
    <>
      <InnerBannerBreadCrumb pageTitle={"Who's Who"} title2={"Who's Who"} />
      <div class="profile-content-bg whos-who-area">
        <div class="container whitebg">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 white-bg ">
              <div class="row p-1">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="profile-title text-left">
                    <h2>Who's Who</h2>
                    <div class="sub-underline"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col-12 col-sm-12 col-md-12">
              <div class="profile-title inner-heading">
                <h2>Our Team</h2>
                <div class="sub-underline"></div>
              </div>
            </div>
          </div>
          <div class="row leader-sec">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 mt-4">
              <div class="image-card">
                <div class="card-cover"></div>
                <div class="card-body">
                  <div class="card-img-sec">
                    <img
                      src="images/chairperson-s.jpg"
                      class="img-fluid"
                      alt="Image"
                    />
                  </div>
                  <div class="text-description d-flex">
                    <h6>MS. ATISHI</h6>
                    <a
                      href="javascript:void(0)"
                      class="btn artistpedia-morebtn"
                    >
                      <span class="mdi mdi-arrow-right"></span>
                    </a>
                  </div>
                  <p class="description-details">
                    HON’BLE MINISTER FOR ART, CULTURE & LANGUAGES,
                    <span> DELHI CHAIRPERSON, SAHITYA KALA PARISHAD</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row sub-leader-sec">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 mt-4">
              <div class="image-card">
                <div class="card-cover"></div>
                <div class="card-body">
                  <div class="card-img-sec">
                    <img
                      src="images/secretary-s.jpg"
                      class="img-fluid"
                      alt="Image"
                    />
                  </div>
                  <div class="text-description d-flex">
                    <h6>DR. MONICA PRIYADARSHINI, IAS</h6>
                  </div>
                  <p class="description-details">
                    SECRETARY
                    <span>DM (SOUTH DELHI)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mt-4">
              <div class="image-card">
                <div class="card-cover"></div>
                <div class="card-body">
                  <div class="card-img-sec">
                    <img src="images/w3.jpg" class="img-fluid" alt="Image" />
                  </div>
                  <div class="text-description d-flex">
                    <h6>SANTOSH SHARMA</h6>
                  </div>
                  <p class="description-details">FINANCE OFFICER / HOO</p>
                </div>
              </div>
              {/* <div class="image-card">
                <img src="images/w3.jpg" class="img-fluid" alt="Image" />
                <div class="text-description d-flex">
                  <h6>SANTOSH SHARMA</h6>
                </div>
                <p class="description-details">FINANCE OFFICER / HOO</p>
              </div> */}
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mt-4">
              <div class="image-card">
                <div class="card-cover"></div>
                <div class="card-body">
                  <div class="card-img-sec">
                    <img src="images/w4.jpg" class="img-fluid" alt="Image" />
                  </div>
                  <div class="text-description d-flex">
                    <h6>KRISHNA KUMAR S</h6>
                  </div>
                  <p class="description-details">SECTION OFFICER</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mt-4">
              <div class="image-card">
                <div class="card-cover"></div>
                <div class="card-body">
                  <div class="card-img-sec">
                    <img src="images/w5.jpg" class="img-fluid" alt="Image" />
                  </div>
                  <div class="text-description d-flex">
                    <h6>VINEET PALIWAL</h6>
                  </div>
                  <p class="description-details">PROG. OFFICER</p>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 mt-4 mb-5">
              <div class="image-card">
                <div class="card-cover"></div>
                <div class="card-body">
                  <div class="card-img-sec">
                    <img src="images/w6.jpg" class="img-fluid" alt="Image" />
                  </div>
                  <div class="text-description d-flex">
                    <h6>SUKHPAL SINGH</h6>
                  </div>
                  <p class="description-details">SR. ASSISTANT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Who;
