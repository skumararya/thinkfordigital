import React from "react";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import { useGetPensionSchemesQuery } from "../../../redux/api/apiService.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PensionSchemes = () => {
  const { data, error, isLoading } = useGetPensionSchemesQuery();
  const skeletonRows = 5;
  // Extract the pension schemes data from the API response
  const pensionSchemesData = data?.data?.[0]?.data || [];

  return (
    <>
      <InnerBannerBreadCrumb
        pageTitle={"Pension Schemes"}
        title2={"Schemes"}
        title3={"Pension Schemes"}
      />
      <div className="profile-content-bg">
        <div className="container">
          <div className="col-12 white-bg white-profile-b">
            <div className="row p-3">
              <div className="col-12">
                <div className="profile-title text-left">
                  <h2>The Pension Schemes</h2>
                  <div className="sub-underline"></div>
                </div>
              </div>

              {/* <div className="col-12 my-3">
                {isLoading ? (
                  <div className="text-center">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">Loading pension schemes...</p>
                  </div>
                ) : error ? (
                  <div className="alert alert-danger text-center">
                    <i className="fas fa-exclamation-triangle me-2"></i>
                    Failed to load pension schemes. Please try again later.
                  </div>
                ) : pensionSchemesData.length === 0 ? (
                  <div className="alert alert-info text-center">
                    <i className="fas fa-info-circle me-2"></i>
                    No pension schemes available at the moment.
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-bordered custm-table">
                      <thead>
                        <tr>
                          <th>Sr.No.</th>
                          <th>Name of the Academy</th>
                          <th>Pension / Financial Assistance</th>
                          <th>Brief of Scheme</th>
                          <th>Document</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pensionSchemesData.map((scheme, index) =>
                            <tr key={scheme.id}>
                              <td>{index + 1}</td>
                              <td>{scheme.academy_name}</td>
                              <td
                                dangerouslySetInnerHTML={{
                                  __html: scheme.financial_assistance,
                                }}
                              />
                              <td>{scheme.description}</td>
                              <td>
                                {scheme.document ? (
                                  <a
                                    href={scheme.document}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-outline-danger"
                                  >
                                    <i className="fas fa-file-pdf"></i>
                                  </a>
                                ) : (
                                  <span className="text-muted">
                                    No document
                                  </span>
                                )}
                              </td>
                            </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div> */}

              <div className="col-12 my-3">
                <div className="table-responsive">
                 <table className="table table-bordered custm-table">
                    <thead>
                      <tr>
                        <th>Sr.No.</th>
                        <th>Name of the Academy</th>
                        <th>Pension / Financial Assistance</th>
                        <th>Brief of Scheme</th>
                        <th>Document</th>
                      </tr>
                    </thead>
                    <tbody>
                      {isLoading ? (
                        <SkeletonTheme
                          baseColor="#c7c2c2ff"
                          highlightColor="#e0dede"
                        >
                          {Array.from({ length: skeletonRows }).map((_, index) => (
                            <tr key={index}>
                              <td>
                                <Skeleton width={20} height={20} />
                              </td>
                              <td>
                                <Skeleton width={180} height={20} />
                              </td>
                              <td>
                                <Skeleton width={150} height={20} />
                              </td>
                              <td>
                                <Skeleton width={200} height={20} />
                              </td>
                              <td>
                                <Skeleton width={60} height={20} />
                              </td>
                            </tr>
                          ))}
                        </SkeletonTheme>
                      ) : error ? (
                        <tr>
                          <td colSpan="5" className="text-center text-danger">
                            <i className="fas fa-exclamation-triangle me-2"></i>
                            Failed to load pension schemes. Please try again later.
                          </td>
                        </tr>
                      ) : pensionSchemesData.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center text-muted">
                            <i className="fas fa-info-circle me-2"></i>
                            No pension schemes available at the moment.
                          </td>
                        </tr>
                      ) : (
                        pensionSchemesData.map((scheme, index) => (
                          <tr key={scheme.id}>
                            <td>{index + 1}</td>
                            <td>{scheme.academy_name}</td>
                            <td
                              dangerouslySetInnerHTML={{
                                __html: scheme.financial_assistance,
                              }}
                            />
                            <td>{scheme.description}</td>
                            <td>
                              {scheme.document ? (
                                <a
                                  href={scheme.document}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-sm btn-outline-danger"
                                >
                                  <i className="fas fa-file-pdf"></i>
                                </a>
                              ) : (
                                <span className="text-muted">No document</span>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PensionSchemes;
