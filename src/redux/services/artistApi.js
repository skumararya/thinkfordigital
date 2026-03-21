import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const artistApi = createApi({
  reducerPath: "artistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_PUBLIC_URL}/index.php/api/v1/`,
    headers: { "X-user": "zur1xjb4", "Content-Type": "application/json" },
  }),
  endpoints: (builder) => ({
    getArtist: builder.query({
      query: (uid) => `/getProfile/${uid}`,
    }),
    artistSearch: builder.mutation({
      query: (formData) => ({
        url: "ArtistListSearch",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useGetArtistQuery, useArtistSearchMutation } = artistApi;