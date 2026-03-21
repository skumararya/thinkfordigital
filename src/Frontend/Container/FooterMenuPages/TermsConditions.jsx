import React from "react";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import Spinner from "../Spinner.jsx";
import { useGetPageContentQuery } from "../../../redux/api/apiService";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TermsConditions = () => {
  const { data: termsResponse, isLoading, isError } = useGetPageContentQuery("termsconditions");
  const termsData = termsResponse?.data;


  
  const renderContent = () => {
    // if (isLoading) return <SkeletonParagraph />;
    // if (isError || !termsData) return <p className="text-center p-4">No data found.</p>;

    return (
      <div className="bio" dangerouslySetInnerHTML={{ __html: termsData.body }} />
    );
  };

  return (
    <>
      <InnerBannerBreadCrumb pageTitle={"Terms & Conditions"} title2={"Terms & Conditions"} />
        {isLoading ? (<Skeleton width={'100%'} height={80} color="#888282ff" highlightColor="#e0dede"/>) : ( <div className="profile-content-bg">
        <div className="container">
          <div className="col-12 white-bg white-profile-b">
            <div className="row p-3">
                <div className="col-12">
                    <div className="profile-title text-left">
                        <h2>{termsData?.title || "Terms & Conditions"}</h2>
                        <div className="sub-underline"></div>
                    </div>
                </div>
               
                <div className="col-12 mt-3">
                    {renderContent()}
                </div>
            </div>
          </div>
        </div>
      </div>)}


     
    </>
  );
}

export default TermsConditions;