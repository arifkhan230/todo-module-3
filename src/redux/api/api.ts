import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://sports-facility.vercel.app" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({
        url: "/api/facility",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTodosQuery } = baseApi;
