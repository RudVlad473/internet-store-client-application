import HTTPMethod from "http-method-enum"

import { AccessToken, AuthUser } from "../../../entities/User/lib/types"
import { AuthPaths } from "../../lib/paths"
import { apiSlice } from "./../apiSlice"

export const authExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    signin: query<
      AccessToken,
      Pick<AuthUser, "email" | "username"> & {
        password: string
      }
    >({
      query: (credentials) => ({
        url: `${AuthPaths.AUTH}/${AuthPaths.SIGN_IN}`,
        method: HTTPMethod.POST,
        body: credentials,
      }),
    }),
  }),
})

export const { useSigninQuery } = authExtendedApi
