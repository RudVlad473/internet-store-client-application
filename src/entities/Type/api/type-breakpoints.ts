import { apiSlice } from "../../../shared/api/apiSlice"
import { TypePaths } from "../../../shared/lib/paths"
import { TType } from "../lib/types"

export const brandExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getTypes: query<TType[], void>({
      query: () => `${TypePaths.TYPE}`,
    }),
  }),
})

export const { useGetTypesQuery } = brandExtendedApi
