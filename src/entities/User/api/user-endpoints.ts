import HTTPMethod from "http-method-enum"

import { apiSlice } from "../../../shared/api/apiSlice"
import { UserPaths } from "../../../shared/lib/paths"
import { TFullUser } from "../lib/types"

export const userExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getOwnDetails: query<TFullUser, void>({
      query: () => `${UserPaths.USER}`,
    }),
  }),
})

export const { useGetOwnDetailsQuery } = userExtendedApi
