import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const footerApi = createApi({
  reducerPath: 'footerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_PUBLIC_URL}/index.php/api/v1/`,
    headers: { "X-user": "zur1xjb4", "Content-Type": "application/json" },
  }),
  endpoints: (builder) => ({
    getArchives: builder.query({
      query: () => 'get-page/archives',
    }),
    getCopyrightPolicy: builder.query({
      query: () => 'get-page/copyright-policy',
    }),
    getPrivacyPolicy: builder.query({
      query: () => 'get-page/privacy-policy',
    }),
    getTermsConditions: builder.query({
      query: () => 'get-page/termsconditions',
    }),
    getContactUs: builder.query({
      query: () => 'get-page/contact-us',
    }),
  }),
});

export const {
  useGetArchivesQuery,
  useGetCopyrightPolicyQuery,
  useGetPrivacyPolicyQuery,
  useGetTermsConditionsQuery,
  useGetContactUsQuery,
} = footerApi;
