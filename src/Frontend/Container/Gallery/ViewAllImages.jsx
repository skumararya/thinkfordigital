// File: src/Frontend/Container/Gallery/ViewAllImages.jsx

import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Spinner from "../Spinner.jsx";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import {
  useGetEventPhotosQuery,
  useGetEventsQuery,
} from "../../../redux/api/apiService";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ViewAllImages() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: eventsResponse } = useGetEventsQuery();
  const event = eventsResponse?.data.find((evt) => evt.id.toString() === id);
  // console.log("event", event);

  const {
    data: photosResponse,
    isLoading,
    isError,
  } = useGetEventPhotosQuery(id);
  const eventPhotos = photosResponse?.data || [];

  const getImageUrl = (path) => {
    if (path && path.startsWith("http")) return path;
    return `${API_BASE_URL}/${path}`;
  };

  const slides = useMemo(
    () =>
      eventPhotos.map((item) => ({
        src: getImageUrl(item.file_path),
        title: item.title,
      })),
    [eventPhotos]
  );

  const openLightbox = (index) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  const showAudioButton = localStorage.getItem("catName") === "Music";
  const eventTitle = eventPhotos[0]?.title || "Event Photo Gallery";

  return (
    <>
      <InnerBannerBreadCrumb
        pageTitle={eventTitle}
        title2="Event Gallery"
        page2="photo-gallery"
        title3="Photos"
      />
      <div className="artistpedia-bg artist-bg">
        <div className="container white-bg py-4">
          <div className="row">
            <div className="col-12">
              <div className="second-heading">
                <h2>{eventTitle}</h2>
              </div>
              <div>
                <h5>{event.description}</h5>
              </div>

              <Button
                variant="warning"
                className="event-gallery-button mr-2"
                onClick={() => navigate(`/event-videos/${id}`)}
              >
                Video Gallery <span className="mdi mdi-arrow-right ml-1"></span>
              </Button>
              {showAudioButton && (
                <Button
                  variant="warning"
                  className="event-gallery-button"
                  onClick={() => navigate(`/event-audios/${id}`)}
                >
                  Audio Gallery{" "}
                  <span className="mdi mdi-arrow-right ml-1"></span>
                </Button>
              )}
            </div>
          </div>

          <div className="row artistpedia-wraper">
            {isLoading ? (
              <Spinner />
            ) : isError ? (
              <p className="text-center col-12">Could not load images.</p>
            ) : slides.length > 0 ? (
              slides.map((item, index) => (
                <div className="col-md-4 col-sm-6 mt-4" key={index}>
                  <div className="artispedia-item">
                    {/* <i className="fa-solid  fa-expand " style={{ color: 'green' }}></i> */}
                    <a
                      href={item.src}
                      onClick={(e) => {
                        e.preventDefault();
                        openLightbox(index);
                      }}
                    >
                      <i className="mdi mdi-fullscreen"></i>
                      <img
                        src={item.src}
                        className="img-fluid"
                        alt={item.alt}
                      />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center mt-4">
                <p>No photos found for this event.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={slides}
        index={activeIndex}
      />
    </>
  );
}

export default ViewAllImages;
