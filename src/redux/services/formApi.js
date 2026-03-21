import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const formApi = createApi({
  reducerPath: "formApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_PUBLIC_URL}/index.php/api/v1/`,
    headers: { "X-user": "zur1xjb4", "Content-Type": "application/json" },
  }),
  endpoints: (builder) => ({
    submitRegFirst: builder.mutation({
      query: (formData) => ({
        url: "registrationPost",
        method: "POST",
        body: formData,
      }),
    }),
    submitOtp: builder.mutation({
      query: (formData) => ({
        url: "otpverifyPost",
        method: "POST",
        body: formData,
      }),
    }),
    submitResendOtp: builder.mutation({
      query: (formData) => ({
        url: "resendOtp",
        method: "POST",
        body: formData,
      }),
    }),
    submitArtistRegistration: builder.mutation({
      query: (formData) => ({
        url: "artRegistration",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const {  useSubmitRegFirstMutation,
  useSubmitOtpMutation,
  useSubmitResendOtpMutation,
  useSubmitArtistRegistrationMutation, } = formApi;
