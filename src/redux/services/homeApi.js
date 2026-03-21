import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_PUBLIC_URL}/index.php/api/v1/`,
    headers: { "X-user": "zur1xjb4", "Content-Type": "application/json" },
  }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "get-news",
    }),
    getGallery: builder.query({
      query: () => "get-gallery",
    }),
    getAboutUs: builder.query({
      query: () => "get-page/about-us",
    }),
    getNoticeAndTenders: builder.query({
      query: () => "get-notice",
    }),
    getBanner: builder.query({
      query: () => "get-banners",
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetGalleryQuery,
  useGetAboutUsQuery,
  useGetNoticeAndTendersQuery,
  useGetBannerQuery,
} = homeApi;
