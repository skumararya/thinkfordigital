import React from "react";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import { useGetOrganizationalSetupQuery } from "../../../redux/api/apiService";

// Custom skeleton styles
const skeletonStyle = {
  backgroundColor: "#c7c2c2ff",
  borderRadius: "4px",
  display: "inline-block",
  animation: "skeleton-loading 1.5s infinite linear",
};

const skeletonText = {
  ...skeletonStyle,
  height: "20px",
  width: "100%",
};

const skeletonImage = {
  ...skeletonStyle,
  height: "200px",
  width: "100%",
};
const skeletonButton = {
  ...skeletonStyle,
};

const skeletonContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const skeletonRow = {
  display: "flex",
  gap: "2px",
};

const OrganizationalSetup = () => {
  const {
    data: orgResponse,
    isLoading,
    isError,
  } = useGetOrganizationalSetupQuery();

  // Extract organizational setup data from API response
  const orgData = orgResponse?.data?.[0]?.data || [];

  // Function to construct image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return "images/default-org.jpg";

    // If the image path is already a full URL, return it
    if (imagePath.startsWith("http")) {
      return imagePath;
    }

    // For relative paths, construct the full URL
    const cleanPath = imagePath.startsWith("/")
      ? imagePath.slice(1)
      : imagePath;
    const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || " ";
    return `${IMAGE_BASE_URL}/${cleanPath}`;
  };

  if (isLoading) {
    return (
      <>
        <InnerBannerBreadCrumb
          pageTitle={"Organizational Setup"}
          title2={"Department Profile"}
          page2={null}
          title3={"Organizational Setup"}
        />
        <div className="profile-content-bg">
          <div className="container">
            <div className="col-12 white-bg white-profile-b">
              <div className="row p-3">
                <div className="col-12 text-center">
                  {/* Skeleton for title and description */}
                  <div style={skeletonText}></div>
                  <div style={{ ...skeletonText, marginTop: "10px" }}></div>
                </div>
              </div>
              <div style={skeletonContainer}>
                <div style={skeletonRow}>
                  {/* Skeleton for the cards */}
                  {Array(3)
                    .fill()
                    .map((_, idx) => (
                      <div className="col-md-4 col-sm-6 mt-4" key={idx}>
                        <div className="image-card h-100">
                          <div style={skeletonImage}></div>
                          <div
                            className="text-description d-flex"
                            style={{ marginTop: "10px" }}
                          >
                            <div style={skeletonText}></div>
                            <div
                              style={{ ...skeletonButton, marginLeft: "auto" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <div style={{ width: "80%", margin: "20px auto" }}>
                  <div style={skeletonImage}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <InnerBannerBreadCrumb
          pageTitle={"Organizational Setup"}
          title2={"Department Profile"}
          page2={null}
          title3={"Organizational Setup"}
        />
        <div className="profile-content-bg">
          <div className="container">
            <div className="col-12 white-bg white-profile-b">
              <div className="row p-3">
                <div className="col-12">
                  <div className="alert alert-danger text-center">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Failed to load organizational setup. Please try again later.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <InnerBannerBreadCrumb
        pageTitle={"Organizational Setup"}
        title2={"Department Profile"}
        page2={null}
        title3={"Organizational Setup"}
      />
      <div className="profile-content-bg">
        <div className="container">
          <div className="col-12 white-bg white-profile-b">
            <div className="row p-3">
              <div className="col-12">
                <div className="profile-title text-left">
                  <h2>Organizational Setup</h2>
                  <div className="sub-underline"></div>
                </div>
                <div className="bio">
                  <p>
                    The Art, Culture and Language Department is a newly set-up
                    Department of Govt. of NCT of Delhi. The Language Department
                    is carved out of Education Department and was set up in
                    September 1999.
                  </p>
                </div>
              </div>
              <div className="col-12">
                {orgData.length === 0 ? (
                  <div className="alert alert-info text-center">
                    <i className="fas fa-info-circle me-2"></i>
                    No organizational links available at the moment.
                  </div>
                ) : (
                  <div className="row artistpedia-wraper organization-setup">
                    {orgData.map((org) => (
                      <div className="col-md-4 col-sm-6 mt-4" key={org.id}>
                        <div className="image-card h-100">
                          <img
                            src={getImageUrl(org.document || org.image)}
                            className="img-fluid org-setup"
                            alt={org.title}
                            onError={(e) => {
                              e.target.src = "images/default-org.jpg";
                            }}
                          />
                          <div className="text-description d-flex">
                            <h6>{org.title}</h6>
                            <a
                              href={org.link || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn artistpedia-morebtn"
                            >
                              <span className="mdi mdi-arrow-right"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="col-12 mt-5 mb-2">
                <div className="profile-title text-left">
                  <h2>Organizational Structure</h2>
                  <div className="sub-underline"></div>
                </div>
              </div>
              <div className="col-md-10 my-2 mx-auto">
                <div className="image-card">
                  <img
                    src="images/org-chart.jpg"
                    className="img-fluid"
                    alt="Organizational Chart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationalSetup;


// import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
// import { useGetOrganizationalSetupQuery } from "../../../redux/api/apiService";
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const OrganizationalSetup = () => {
//   const { data: orgResponse, isLoading, isError } = useGetOrganizationalSetupQuery();

//   // Extract organizational setup data from API response
//   const orgData = orgResponse?.data?.[0]?.data || [];

//   // Function to construct image URL
//   const getImageUrl = (imagePath) => {
//     if (!imagePath) return "images/default-org.jpg";

//     // If the image path is already a full URL, return it
//     if (imagePath.startsWith('http')) {
//       return imagePath;
//     }

//     // For relative paths, construct the full URL
//     const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
//     const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL || ' ';
//     return `${IMAGE_BASE_URL}/${cleanPath}`;
//   };

//   if (isLoading) {
//     return (
//       <>
//         <InnerBannerBreadCrumb pageTitle={"Organizational Setup"} title2={"Department Profile"} page2={null} title3={"Organizational Setup"} />
//         <div className="profile-content-bg">
//           <div className="container">
//             <div className="col-12 white-bg white-profile-b">
//               <div className="row p-3">
//                 <div className="col-12 text-center">
//                   <div className="spinner-border text-primary" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                   </div>
//                   <p className="mt-2">Loading organizational setup...</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   if (isError) {
//     return (
//       <>
//         <InnerBannerBreadCrumb pageTitle={"Organizational Setup"} title2={"Department Profile"} page2={null} title3={"Organizational Setup"} />
//         <div className="profile-content-bg">
//           <div className="container">
//             <div className="col-12 white-bg white-profile-b">
//               <div className="row p-3">
//                 <div className="col-12">
//                   <div className="alert alert-danger text-center">
//                     <i className="fas fa-exclamation-triangle me-2"></i>
//                     Failed to load organizational setup. Please try again later.
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <InnerBannerBreadCrumb pageTitle={"Organizational Setup"} title2={"Department Profile"} page2={null} title3={"Organizational Setup"} />
//       <div className="profile-content-bg">
//         <div className="container">
//           <div className="col-12 white-bg white-profile-b">
//             <div className="row p-3">
//               <div className="col-12">
//                 <div className="profile-title text-left">
//                   <h2>Organizational Setup</h2>
//                   <div className="sub-underline"></div>
//                 </div>
//                 <div className="bio">
//                   <p>The Art, Culture and Language Department is a newly set-up Department of Govt. of NCT of Delhi. The Language Department is carved out of Education Department and was set up in September 1999.</p>
//                 </div>
//               </div>
//               <div className="col-12">
//                 {orgData.length === 0 ? (
//                   <div className="alert alert-info text-center">
//                     <i className="fas fa-info-circle me-2"></i>
//                     No organizational links available at the moment.
//                   </div>
//                 ) : (
//                   <div className="row artistpedia-wraper organization-setup">
//                     {orgData.map(org => (
//                       <div className="col-md-4 col-sm-6 mt-4" key={org.id}>
//                         <div className="image-card h-100">
//                           <img
//                             src={getImageUrl(org.document || org.image)}
//                             className="img-fluid org-setup"
//                             alt={org.title}
//                             onError={(e) => {
//                               e.target.src = "images/default-org.jpg";
//                             }}
//                           />
//                           <div className="text-description d-flex">
//                             <h6>{org.title}</h6>
//                             <a
//                               href={org.link || "#"}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="btn artistpedia-morebtn"
//                             >
//                               <span className="mdi mdi-arrow-right"></span>
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//               <div className="col-12 mt-5 mb-2">
//                 <div className="profile-title text-left">
//                   <h2>Organizational Structure</h2>
//                   <div className="sub-underline"></div>
//                 </div>
//               </div>
//               <div className="col-md-10 my-2 mx-auto">
//                 <div className="image-card">
//                   <img src="images/org-chart.jpg" className="img-fluid" alt="Organizational Chart" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrganizationalSetup;
