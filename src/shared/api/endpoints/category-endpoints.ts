import { CategoryPaths } from "../../lib/paths"
import { apiSlice } from "./../apiSlice"

export const categoryExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getCategories: query<unknown[], void>({
      query: () => `${CategoryPaths.CATEGORY}`,
    }),
  }),
})

export const { useGetCategoriesQuery } = categoryExtendedApi
