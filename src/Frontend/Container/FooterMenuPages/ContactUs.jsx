import React from "react";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import Skeleton from "react-loading-skeleton"; // Import Skeleton
import { useGetContactUsQuery } from "../../../redux/api/apiService";

const ContactUs = () => {
  const { data: contactResponse, isLoading, isError } = useGetContactUsQuery();

  // Extract contact data from API response
  const contactData = contactResponse?.data?.[0]?.data || [];

  // Function to format email for display (replace @ and . with [at] and [dot])
  const formatEmailForDisplay = (email) => {
    if (!email) return "";
    return email.replace("@", "[at]").replace(/\./g, "[dot]");
  };

  // Function to create mailto link
  const getMailToLink = (email) => {
    if (!email) return "#";
    return `mailto:${email}`;
  };

  // Function to format website URL
  const getWebsiteUrl = (weblink) => {
    if (!weblink) return "#";
    return weblink.startsWith("http") ? weblink : `https://${weblink}`;
  };

  if (isLoading) {
    return (
      <>
        <InnerBannerBreadCrumb pageTitle={"Contact Us"} title2="Contact Us" />
        <div className="profile-content-bg">
          <div className="container">
            <div className="col-12 white-bg white-profile-b">
              <div className="row p-3">
                <div className="col-12 text-center">
                  <Skeleton height={50} width={200} />{" "}
                  {/* Skeleton for page title */}
                  <div className="mt-4">
                    <Skeleton height={50} count={3} />{" "}
                    {/* Skeleton for contact data lines */}
                    <Skeleton height={40} count={2} />
                  </div>
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
        <InnerBannerBreadCrumb pageTitle={"Contact Us"} title2="Contact Us" />
        <div className="profile-content-bg">
          <div className="container">
            <div className="col-12 white-bg white-profile-b">
              <div className="row p-3">
                <div className="col-12">
                  <div className="alert alert-danger text-center">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Failed to load contact information. Please try again later.
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
      <InnerBannerBreadCrumb pageTitle={"Contact Us"} title2="Contact Us" />
      <div className="profile-content-bg">
        <div className="container">
          <div className="col-12 white-bg white-profile-b">
            <div className="row p-3">
              <div className="col-12">
                <div className="profile-title text-left">
                  <h2
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "15px",
                    }}
                  >
                    Contact Us
                  </h2>
                  <div
                    style={{
                      width: "50px",
                      height: "2px",
                      backgroundColor: "#007bff",
                      marginTop: "5px",
                    }}
                  ></div>
                </div>
              </div>

              <div className="col-12 mt-4">
                {contactData.length === 0 ? (
                  <div className="alert alert-info text-center">
                    <i className="fas fa-info-circle me-2"></i>
                    No contact information available at the moment.
                  </div>
                ) : (
                  <div className="row box">
                    {contactData.map((contact, index) => (
                      <div key={contact.id} className="col-md-6 mt-4">
                        <div
                          style={{
                            backgroundColor: "#f9f9f9",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "1.25rem",
                              fontWeight: "bold",
                              color: "#333",
                              paddingRight: "10px",
                            }}
                          >
                            {contact.address}
                          </span>

                          {/* Address */}
                          <div
                            style={{
                              marginTop: "10px",
                              fontSize: "1rem",
                              lineHeight: "1.6",
                              color: "#555",
                            }}
                          ></div>

                          {/* City and Pincode */}
                          <div
                            style={{
                              marginTop: "10px",
                              fontSize: "1rem",
                              color: "#555",
                            }}
                          >
                            {contact.city}
                            {contact.pincode && ` - ${contact.pincode}`}
                          </div>

                          {/* Contact Information */}
                          <div
                            style={{
                              marginTop: "15px",
                              fontSize: "1rem",
                              lineHeight: "1.6",
                              color: "#555",
                            }}
                          >
                            <p>
                              <strong>Phone No:</strong>{" "}
                              {contact.phone_no || "N/A"}
                              <br />
                              <strong>Email:</strong>
                              {contact.email ? (
                                <>
                                  {" "}
                                  <span>
                                    {formatEmailForDisplay(contact.email)}
                                  </span>{" "}
                                  <a
                                    href={getMailToLink(contact.email)}
                                    style={{
                                      display: "inline-block",
                                      padding: "5px 10px",
                                      marginLeft: "10px",
                                      backgroundColor: "#007bff",
                                      color: "#fff",
                                      borderRadius: "5px",
                                      textDecoration: "none",
                                    }}
                                    title="Send email"
                                  >
                                    <i className="fas fa-envelope"></i>
                                  </a>
                                </>
                              ) : (
                                " N/A"
                              )}
                              <br />
                              <strong>Web:</strong>
                              {contact.weblink ? (
                                <>
                                  {" "}
                                  <a
                                    href={getWebsiteUrl(contact.weblink)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      color: "#007bff",
                                      textDecoration: "none",
                                      transition: "color 0.3s",
                                    }}
                                  >
                                    {contact.weblink}
                                  </a>{" "}
                                  <a
                                    href={getWebsiteUrl(contact.weblink)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      display: "inline-block",
                                      padding: "5px 10px",
                                      marginLeft: "10px",
                                      backgroundColor: "#17a2b8",
                                      color: "#fff",
                                      borderRadius: "5px",
                                      textDecoration: "none",
                                    }}
                                    title="Visit website"
                                  >
                                    <i className="fas fa-external-link-alt"></i>
                                  </a>
                                </>
                              ) : (
                                " N/A"
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

