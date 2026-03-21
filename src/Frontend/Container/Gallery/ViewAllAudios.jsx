import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Spinner from "../Spinner.jsx";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import { useGetEventAudiosQuery, useGetEventsQuery } from "../../../redux/api/apiService";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ViewAllAudios() {
  const navigate = useNavigate();
  const { id } = useParams();

    const { data: eventsResponse } = useGetEventsQuery();
    const event = eventsResponse?.data.find((evt) => evt.id.toString() === id);

  const { data: audiosResponse, isLoading, isError } = useGetEventAudiosQuery(id);
  const eventAudios = audiosResponse?.data || [];
  const eventTitle = eventAudios[0]?.title || "Event Audio Gallery";

  const getAudioUrl = (path) => {
    if (path && path.startsWith('http')) {
      return path;
    }
    return `${API_BASE_URL}/${path}`;
  };

  return (
    <>
      <InnerBannerBreadCrumb pageTitle={eventTitle} title2="Event Gallery" page2="photo-gallery" title3="Audios" />
      <div className="artistpedia-bg artist-bg">
        <div className="container white-bg py-4">
          <div className="row">
            <div className="col-12">
                <div className="second-heading"><h2>{eventTitle}</h2></div> <div>
                <h5>{event.description}</h5>
              </div>
                <Button variant="warning" className="event-gallery-button mr-2" onClick={() => navigate(`/event-photos/${id}`)}>
                    Photo Gallery <span className="mdi mdi-arrow-right ml-1"></span>
                </Button>
                <Button variant="warning" className="event-gallery-button" onClick={() => navigate(`/event-videos/${id}`)}>
                    Video Gallery <span className="mdi mDI-arrow-right ml-1"></span>
                </Button>
            </div>
          </div>
          <div className="row gallerysec mt-4">
            {isLoading && <Spinner />}
            {isError && <p className="text-center">Could not load audios.</p>}
            {eventAudios.length > 0 ? (
                eventAudios.map((item) => (
                  <div className="col-md-6 col-lg-4 mb-3" key={item.id}>
                    <div className="audio-area rainbow">
                      <audio className="w-100" controls>
                        <source src={getAudioUrl(item.upload_audio_path)} type="audio/mp3" />
                        Your browser does not support the audio element.
                      </audio>
                    </div>
                  </div>
                ))
            ) : !isLoading && (
                <div className="col-12 text-center"><p>No audio records found for this event.</p></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAllAudios;