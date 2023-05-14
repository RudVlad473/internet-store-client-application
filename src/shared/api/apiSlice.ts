import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { baseUrl } from "../consts/baseUrl"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: () => ({}),
})
