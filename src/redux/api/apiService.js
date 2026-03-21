import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CryptoJS from "crypto-js";

// Your bearer token
const BEARER_TOKEN =
  import.meta.env.VITE_API_BEARER_TOKEN ||
  "QPxDKETx5IoX2A8sw+RapMltcIjDrVDKGPbPl1CKo/I=";

// Use relative path for development (proxy) and full URL for production
const isDevelopment = import.meta.env.DEV;
const fullApiBaseUrl = isDevelopment
  ? "/api" // This will be proxied to the full URL
  : `${import.meta.env.VITE_API_BASE_URL}/api/v1/`;

const baseQuery = fetchBaseQuery({
  baseUrl: fullApiBaseUrl,
  prepareHeaders: (headers) => {
    // Set the bearer token in the Authorization header
    headers.set("Authorization", `Bearer ${BEARER_TOKEN}`);
    headers.set("X-user", "zur1xjb4");
    // Add other common headers if needed
    // headers.set("Content-Type", "application/json");
    return headers;
  },
});

const getIP = async () => {
  try {
    const res = await fetch("https://geolocation-db.com/json/");
    const data = await res.json();
    return data.IPv4;
  } catch (error) {
    console.error("Could not fetch IP address:", error);
    return null;
  }
};

export const apiService = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: ["Events", "Artists", "Gallery", "Visitors"],
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "get-news",
      providesTags: ["Events"],
    }),
    getGallery: builder.query({
      query: () => "get-gallery",
      providesTags: ["Gallery"],
    }),
    getAboutUs: builder.query({ query: () => "get-page/about-us" }),
    getVision: builder.query({ query: () => "get-page/vision" }),
    getNoticeAndTenders: builder.query({ query: () => "get-notice" }),
    getBanner: builder.query({ query: () => "get-banners" }),
    getSocialLinks: builder.query({ query: () => "get-social_link" }),
    getLastUpdated: builder.query({ query: () => "getlastupdate" }),
    getPageContent: builder.query({
      query: (pageName) => `get-page/${pageName}`,
    }),

    // Artist Profile & Search
    getProfile: builder.query({ query: (uid) => `getProfile/${uid}` }),
    searchArtists: builder.mutation({
      query: (payload) => ({
        url: "ArtistListSearch",
        method: "POST",
        body: payload,
      }),
    }),

    // --- CASCADING DROPDOWN ENDPOINTS ---
    getCategories: builder.query({
      query: (originId) => `get-categoryByorigin/${originId}`,
    }),
    getCategoryTwo: builder.query({
      query: ({ originId, categoryId }) =>
        `get-subCategory/${originId}/${categoryId}`,
    }),
    getCategoryThree: builder.query({
      query: ({ categoryId, subCategoryId }) =>
        `get-StateSubCategory/${categoryId}/${subCategoryId}`,
    }),
    getCategoryFour: builder.query({
      query: ({ subCategoryId, stateId }) =>
        `get-ArtName-substate/${subCategoryId}/${stateId}`,
    }),
    getCategoryFive: builder.query({
      query: (categoryFourId) =>
        `get-ArtName-sub-subcategory/${categoryFourId}`,
    }),

    getSubCategories: builder.query({
      query: ({ originId, categoryId }) =>
        `get-subCategory/${originId}/${categoryId}`,
    }),

    // --- NEW REGISTRATION FORM ENDPOINTS ---
    getCategoriesNew: builder.query({
      query: (originId) => `getCategoryNew?originId=${originId}`,
    }),
    getCategoryTwoNew: builder.query({
      query: (categoryId) => `getCategoryTwo?categoryId=${categoryId}`,
    }),
    getCategoryThreeNew: builder.query({
      query: (categoryTwoId) =>
        `getCategoryThree?categoryTwoId=${categoryTwoId}`,
    }),
    getCategoryFourNew: builder.query({
      query: (categoryThreeId) =>
        `getCategoryFour?categoryThreeId=${categoryThreeId}`,
    }),
    getCategoryFiveNew: builder.query({
      query: (categoryFourId) =>
        `getCategoryFive?categoryFourId=${categoryFourId}`,
    }),

    getEventPhotos: builder.query({
      query: (id) => `event-photos/${id}`,
      providesTags: ["Gallery"],
    }),
    getEventVideos: builder.query({
      query: (id) => `event-videos/${id}`,
      providesTags: ["Gallery"],
    }),
    getEventAudios: builder.query({
      query: (id) => `event-audios/${id}`,
      providesTags: ["Gallery"],
    }),
    searchEvents: builder.mutation({
      query: (formData) => ({
        url: "EventSearch",
        method: "POST",
        body: formData,
      }),
    }),

    // Registration endpoints
    registerStep1: builder.mutation({
      query: (payload) => ({
        url: "registrationPost",
        method: "POST",
        body: payload,
      }),
    }),

    verifyOtp: builder.mutation({
      async queryFn(payload, _queryApi, _extraOptions, fetchWithBQ) {
        const result = await fetchWithBQ({
          url: "otpverifyPost",
          method: "POST",
          body: payload,
          responseHandler: async (response) => await response.text(),
        });

        if (result.error) return { error: result.error };

        try {
          const decrypted = CryptoJS.AES.decrypt(result.data, "CatApplication");
          const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
          const json = JSON.parse(decryptedString);
          return { data: json };
        } catch (e) {
          return { error: { status: "DECRYPT_ERROR", error: e.message } };
        }
      },
    }),

    resendOtp: builder.mutation({
      async queryFn(payload, _queryApi, _extraOptions, fetchWithBQ) {
        const result = await fetchWithBQ({
          url: "resendOtp",
          method: "POST",
          body: payload,
          responseHandler: async (response) => await response.text(),
        });

        if (result.error) return { error: result.error };

        try {
          const decrypted = CryptoJS.AES.decrypt(result.data, "CatApplication");
          const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);
          const json = JSON.parse(decryptedString);
          return { data: json };
        } catch (e) {
          return { error: { status: "DECRYPT_ERROR", error: e.message } };
        }
      },
    }),

    registerStep3: builder.mutation({
      query: (formData) => ({
        url: "artRegistration",
        method: "POST",
        body: formData,
      }),
    }),

    subscribeToEvents: builder.mutation({
      query: (payload) => ({
        url: "event-subscribes",
        method: "POST",
        body: payload,
      }),
    }),

    // Footer endpoints
    getArchives: builder.query({
      query: () => "get-page/archives",
    }),
    getCopyrightPolicy: builder.query({
      query: () => "get-page/copyright-policy",
    }),
    getPrivacyPolicy: builder.query({
      query: () => "get-page/privacy-policy",
    }),
    getTermsConditions: builder.query({
      query: () => "get-page/termsconditions",
    }),
    getContactUs: builder.query({
      query: () => "contact-us",
    }),

    getVisitorCount: builder.query({
      query: () => "getVisitor",
      providesTags: ["Visitors"],
    }),

    addVisitor: builder.mutation({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const ip = await getIP();
        if (!ip) {
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: "Could not determine IP address",
            },
          };
        }
        const result = await fetchWithBQ(`addVisitor/${ip}`);
        return result.data ? { data: result.data } : { error: result.error };
      },
      invalidatesTags: ["Visitors"],
    }),

    getPrevailingSchemes: builder.query({
      query: () => "prevailing_schemes",
    }),
    getPensionSchemes: builder.query({
      query: () => "pension_schemes",
    }),
    getOrganizationalSetup: builder.query({
      query: () => "organization-setup",
    }),

    getScreenReader: builder.query({
      query: () => "screen-reader",
    }),
  }),
});

// Export hooks
export const {
  useGetScreenReaderQuery,
  useGetEventsQuery,
  useGetGalleryQuery,
  useGetAboutUsQuery,
  useGetVisionQuery,
  useGetNoticeAndTendersQuery,
  useGetBannerQuery,
  useGetSocialLinksQuery,
  useGetLastUpdatedQuery,
  useGetPageContentQuery,
  useGetCategoriesQuery,
  useGetCategoryTwoQuery,
  useGetCategoryThreeQuery,
  useGetCategoryFourQuery,
  useGetCategoryFiveQuery,
  useSearchArtistsMutation,
  useGetProfileQuery,
  useGetSubCategoriesQuery,
  useGetEventPhotosQuery,
  useGetEventVideosQuery,
  useGetEventAudiosQuery,
  useSearchEventsMutation,
  useRegisterStep1Mutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useGetCategoriesNewQuery,
  useGetCategoryTwoNewQuery,
  useGetCategoryThreeNewQuery,
  useGetCategoryFourNewQuery,
  useGetCategoryFiveNewQuery,
  useRegisterStep3Mutation,
  useSubscribeToEventsMutation,
  useGetArchivesQuery,
  useGetCopyrightPolicyQuery,
  useGetPrivacyPolicyQuery,
  useGetTermsConditionsQuery,
  useGetContactUsQuery,
  useGetVisitorCountQuery,
  useAddVisitorMutation,
  useGetPrevailingSchemesQuery,
  useGetPensionSchemesQuery,
  useGetOrganizationalSetupQuery,
} = apiService;
