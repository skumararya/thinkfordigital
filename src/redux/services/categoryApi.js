import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_PUBLIC_URL}/index.php/api/v1/`,
    headers: { "X-user": "zur1xjb4", "Content-Type": "application/json" },
  }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: (originId) => `/get-categoryByorigin/${originId}`,
    }),
    getSubCategory: builder.query({
      query: ({ originId, categoryId }) =>
        `/get-subCategory/${originId}/${categoryId}`,
    }),
    getCategoryNew: builder.query({
      query: (originId) => `/getCategoryNew?originId=${originId}`,
    }),
    getCategoryTwo: builder.query({
      query: ({ categoryId }) => `/getCategoryTwo?categoryId=${categoryId}`,
    }),
    getCategoryThree: builder.query({
      query: ({ categoryTwoId }) =>
        `/getCategoryThree?categoryTwoId=${categoryTwoId}`,
    }),
    getCategoryFour: builder.query({
      query: ({ categoryThreeId }) =>
        `/getCategoryFour?categoryThreeId=${categoryThreeId}`,
    }),
    getCategoryFive: builder.query({
      query: ({ categoryFourId }) =>
        `/getCategoryFive?categoryFourId=${categoryFourId}`,
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetSubCategoryQuery,
  useGetCategoryNewQuery,
  useGetCategoryTwoQuery,
  useGetCategoryThreeQuery,
  useGetCategoryFourQuery,
  useGetCategoryFiveQuery,
} = categoryApi;
