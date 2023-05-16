import { apiSlice } from "../../../shared/api/apiSlice"
import { CategoryPaths } from "../../../shared/lib/paths"
import { TCategory } from "../lib/types"

export const categoryExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getCategories: query<TCategory[], void>({
      query: () => `${CategoryPaths.CATEGORY}`,
    }),
  }),
})

export const { useGetCategoriesQuery } = categoryExtendedApi
