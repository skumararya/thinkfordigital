import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Spinner from "../Spinner.jsx";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import { useGetEventVideosQuery, useGetEventsQuery } from "../../../redux/api/apiService";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ViewAllVideos() {
  const navigate = useNavigate();
  const { id } = useParams();

    const { data: eventsResponse } = useGetEventsQuery();
    const event = eventsResponse?.data.find((evt) => evt.id.toString() === id);

  const { data: videosResponse, isLoading, isError } = useGetEventVideosQuery(id);
  const eventVideos = videosResponse?.data || [];
  const eventTitle = eventVideos[0]?.title || "Event Video Gallery";

  const getVideoUrl = (path) => {
    if (path && path.startsWith('http')) {
      return path;
    }
    return `${API_BASE_URL}/${path}`;
  };
  
  return (
    <>
      <InnerBannerBreadCrumb pageTitle={eventTitle} title2="Event Gallery" page2="photo-gallery" title3="Videos" />
      <div className="artistpedia-bg artist-bg">
        <div className="container white-bg py-4">
          <div className="row">
            <div className="col-12">
                <div className="second-heading"><h2>{eventTitle}</h2></div>
                 <div>
                <h5>{event.description}</h5>
              </div>
                <Button variant="warning" className="event-gallery-button mr-2" onClick={() => navigate(`/event-photos/${id}`)}>
                    Photo Gallery <span className="mdi mdi-arrow-right ml-1"></span>
                </Button>
                <Button variant="warning" className="event-gallery-button" onClick={() => navigate(`/event-audios/${id}`)}>
                    Audio Gallery <span className="mdi mdi-arrow-right ml-1"></span>
                </Button>
            </div>
          </div>
          <div className="row gallerysec mt-4">
            {isLoading && <Spinner />}
            {isError && <p className="text-center">Could not load videos.</p>}
            {eventVideos.length > 0 ? (
                eventVideos.map((item) => (
                  <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
                    <video className="w-100" controls preload="metadata">
                      {/* Use the helper function to set the correct video source */}
                      <source src={`${getVideoUrl(item.upload_video_path)}#t=0.1`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))
            ) : !isLoading && (
                <div className="col-12 text-center"><p>No videos found for this event.</p></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAllVideos;