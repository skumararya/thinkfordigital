import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import Spinner from "../Spinner.jsx";
import InnerBannerBreadCrumb from "../../Shared/InnerBannerBreadCrumb.jsx";
import {
  useGetEventsQuery,
  useSearchEventsMutation,
  useGetCategoriesQuery,
} from "../../../redux/api/apiService";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Add validation schema
const searchValidationSchema = Yup.object().shape({
  keyword: Yup.string()
    .max(100, "Keyword must be less than 100 characters")
    .matches(/^[a-zA-Z0-9\s\-_]*$/, "Keyword contains invalid characters"),
  month: Yup.string().matches(
    /^(0[1-9]|1[0-2]|)$/,
    "Please select a valid month"
  ),
  event_category: Yup.string().matches(
    /^[0-9]*$/,
    "Category must be a valid ID"
  ),
});

const EventCard = ({ event }) => {
  const getImageUrl = (path) => {
    if (path && path.startsWith("http")) {
      return path;
    }
    return `${API_BASE_URL}/${path}`;
  };

  return (
    <div className="col-md-4 col-sm-6 mt-4">
      <div className="artispedia-item">
        <NavLink to={`/event-photos/${event.id}`}>
          <img
            src={getImageUrl(event.upload_image_path)}
            alt={event.title || ""}
          />
        </NavLink>
      </div>
      <div className="artistpedia-footer">
        <h2 style={{ fontSize: "16px" }}>{event.title}</h2>
        <NavLink
          to={`/event-photos/${event.id}`}
          className="btn- artispedia-btn button_1"
        >
          <span className="mdi mdi-arrow-right"></span>
        </NavLink>
      </div>
    </div>
  );
};

const PhotoGalleryAllEvents = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(searchValidationSchema),
    mode: "onChange", // Validate on change for better UX
  });

  const { data: initialEventsResponse, isLoading: isLoadingInitial } =
    useGetEventsQuery();
  const [searchEvents, { data: searchResult, isLoading: isSearching }] =
    useSearchEventsMutation();
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const [formError, setFormError] = useState(""); // For general form errors

  const { data: categoriesResponse } = useGetCategoriesQuery("1");
  const categories = categoriesResponse?.data?.[0]?.data || [];

  useEffect(() => {
    if (searchResult?.data) {
      setDisplayedEvents(searchResult.data[0]?.data || []);
    } else if (initialEventsResponse?.data) {
      setDisplayedEvents(initialEventsResponse.data);
    }
  }, [initialEventsResponse, searchResult]);

  const onSearchSubmit = async (formData) => {
    try {
      setFormError(""); // Clear previous errors
      const payload = { ...formData, event_origin: "1" };
      await searchEvents(payload).unwrap();
    } catch (error) {
      console.error("Search failed:", error);
      setFormError("Failed to search events. Please try again.");
    }
  };

  const handleReset = () => {
    reset();
    setFormError("");
    setDisplayedEvents(initialEventsResponse?.data || []);
  };

  const isLoading = isLoadingInitial || isSearching;

  console.log(displayedEvents);

  return (
    <>
      <InnerBannerBreadCrumb pageTitle={"Event Gallery"} title2={"Gallery"} />
      <div className="artistpedia-bg">
        <div className="container">
          <div className="row">
            <div className="col-12 white-bg mt-4">
              <div className="row p-3 align-items-center">
                <div className="col-12 text-center">
                  <div className="second-heading">
                    <h2>Event Gallery</h2>
                  </div>
                </div>
                <div className="col-12">
                  {/* General Form Error */}
                  {formError && (
                    <div className="alert alert-danger mb-3" role="alert">
                      {formError}
                    </div>
                  )}

                  <form
                    className="event-search justify-content-center"
                    onSubmit={handleSubmit(onSearchSubmit)}
                    noValidate // Disable browser validation
                  >
                    <div className="form-group mb-3">
                      <input
                        {...register("keyword")}
                        placeholder="Enter Title/Keyword"
                        className={`events-input ${
                          errors.keyword ? "is-invalid" : ""
                        }`}
                      />
                      {errors.keyword && (
                        <div className="invalid-feedback d-block">
                          {errors.keyword.message}
                        </div>
                      )}
                    </div>

                    <div className="form-group mb-3">
                      <select
                        {...register("month")}
                        className={`events-select ${
                          errors.month ? "is-invalid" : ""
                        }`}
                      >
                        <option value="">Select Month</option>
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      {errors.month && (
                        <div className="invalid-feedback d-block">
                          {errors.month.message}
                        </div>
                      )}
                    </div>

                    <div className="form-group mb-3">
                      <select
                        {...register("event_category")}
                        className={`events-select ${
                          errors.event_category ? "is-invalid" : ""
                        }`}
                      >
                        <option value="">All Categories</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.category_name}
                          </option>
                        ))}
                      </select>
                      {errors.event_category && (
                        <div className="invalid-feedback d-block">
                          {errors.event_category.message}
                        </div>
                      )}
                    </div>

                    <div className="form-group mb-3">
                      <button
                        type="submit"
                        className="btn cta_button"
                        disabled={isLoading || isSubmitting || !isValid}
                      >
                        {isLoading || isSubmitting
                          ? "Searching..."
                          : "Filter Events"}
                      </button>
                      <button
                        type="button"
                        className="btn cta_button ms-2"
                        onClick={handleReset}
                        disabled={isLoading}
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="Sculptor-title text-center">
                <h2>Galleries</h2>
                <div className="sub-underline"></div>
              </div>
            </div>
          </div>

          <div className="row artistpedia-wraper">
            {isLoading ? (
              <SkeletonTheme baseColor="#c7c2c2ff" highlightColor="#e0dede">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="col-md-4 col-sm-6 mt-4">
                    <Skeleton width="100%" height={250} />
                    <Skeleton
                      width="100%"
                      height={30}
                      style={{ marginTop: "10px" }}
                    />
                  </div>
                ))}
              </SkeletonTheme>
            ) : displayedEvents.length > 0 ? (
              displayedEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <div className="col-12 text-center mt-4">
                <p>No event galleries found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGalleryAllEvents;
