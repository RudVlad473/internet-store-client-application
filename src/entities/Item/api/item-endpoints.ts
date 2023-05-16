import { apiSlice } from "../../../shared/api/apiSlice"
import { ItemPaths } from "../../../shared/lib/paths"

export const itemExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getItems: query<unknown[], void>({
      query: () => `${ItemPaths.ITEM}`,
    }),
  }),
})

export const { useGetItemsQuery } = itemExtendedApi
