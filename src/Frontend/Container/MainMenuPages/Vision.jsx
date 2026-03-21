import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import { useGetVisionQuery } from "../../../redux/api/apiService";
import Spinner from "../Spinner.jsx";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Vision = () => {
  const { data: visionResponse, isLoading, isError } = useGetVisionQuery();
  const vision = visionResponse?.data;

  const renderContent = () => {
    if (isLoading)
      return (
        <Skeleton
          style={{ marginTop: "10px", marginBottom: "10px" }}
          width={1200}
          height={80}
          baseColor="#c7c2c2ff"
          highlightColor="#e0dede"
        />
      );
    if (isError || !vision)
      return <p className="text-center">No data found.</p>;

    return (
      <div className="col-12 white-bg white-profile-b">
        <div className="row p-3">
          <div className="col-12">
            <div className="profile-title text-left">
              <h2>{vision.title}</h2>
              <div className="sub-underline"></div>
            </div>
            <div
              className="bio"
              dangerouslySetInnerHTML={{
                __html: vision.body.slice(1, vision.body.length - 2),
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <InnerBannerBreadCrumb
        pageTitle={"Vision"}
        title2={"Department Profile"}
        page2={null}
        title3={"Vision"}
      />
      <div className="profile-content-bg">
        <div className="container">{renderContent()}</div>
      </div>
    </>
  );
};
export default Vision;
