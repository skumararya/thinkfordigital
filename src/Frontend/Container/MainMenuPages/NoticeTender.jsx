
import React from "react";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import Spinner from "../Spinner.jsx";
import { useGetNoticeAndTendersQuery } from "../../../redux/api/apiService";

const API_BASE_URL = 'https://drt.velocis.in/ACL_application/public';

function NoticeTender() {
  const { data: noticesResponse, isLoading, isError } = useGetNoticeAndTendersQuery();

  const notices = noticesResponse?.data || [];

  const renderContent = () => {
    if (isLoading) return <Spinner />;
    if (isError) return <p className="text-center p-4">Could not load data.</p>;
    if (notices.length === 0) return <p className="text-center p-4">No notices or tenders found.</p>;

    return (
      <div className="col-12 my-3">
        <div className="table-responsive">
          <table className="table table-bordered custm-table">
            <thead>
              <tr>
                <th>Sr.No.</th>
                <th>Title</th>
                <th>Date</th>
                <th>Document</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((item, index) => (
                <tr key={item.id || index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.from_date}</td>
                  <td>
                    <a
                      href={`${API_BASE_URL}/${item.aad_file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-danger"
                      title={`View PDF for ${item.title}`}
                    >
                      <i className="fas fa-file-pdf mr-2"></i>View PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <>
      <InnerBannerBreadCrumb pageTitle="Notice & Tenders" title2="Notice & Tenders" />
      <div className="profile-content-bg">
        <div className="container">
          <div className="col-12 white-bg white-profile-b">
            <div className="row p-3">
              <div className="col-12">
                <div className="profile-title text-left">
                  <h2>Notice & Tenders</h2>
                  <div className="sub-underline"></div>
                </div>
              </div>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoticeTender;