import { ItemPaths } from "../../lib/paths"
import { apiSlice } from "./../apiSlice"

export const itemExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getItems: query<unknown[], void>({
      query: () => `${ItemPaths.ITEM}`,
    }),
  }),
})

export const { useGetItemsQuery } = itemExtendedApi
