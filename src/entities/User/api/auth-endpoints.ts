import HTTPMethod from "http-method-enum"

import { apiSlice } from "../../../shared/api/apiSlice"
import { AuthPaths } from "../../../shared/lib/paths"
import { AccessToken, SigninUser, SignupUser } from "../lib/types"

export const authExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signin: mutation<AccessToken, SigninUser>({
      query: (credentials) => ({
        url: `${AuthPaths.AUTH}/${AuthPaths.SIGN_IN}`,
        method: HTTPMethod.POST,
        body: credentials,
      }),
    }),
    signup: mutation<AccessToken, SignupUser>({
      query: (credentials) => ({
        url: `${AuthPaths.AUTH}/${AuthPaths.SIGN_UP}`,
        method: HTTPMethod.POST,
        body: credentials,
      }),
    }),
  }),
})

export const { useSigninMutation, useSignupMutation } = authExtendedApi
