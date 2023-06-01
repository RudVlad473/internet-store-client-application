import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode"

import { RootState } from "../../../app/lib"
import { AccessToken } from "../../../entities/User/lib/types"
import { JwtUser } from "./../../../entities/User/lib/types/jwt"

const initialState: AccessToken = {
  access_token: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<AccessToken>) => {
      const { access_token } = action.payload

      state.access_token = access_token
    },
    dropAccessToken: (state) => {
      state.access_token = ""
    },
  },
})

export const { setAccessToken, dropAccessToken } = authSlice.actions
export const { reducer: authReducer } = authSlice

export const selectToken = (state: RootState) => {
  return state.auth.access_token
}

export const selectCredentials = (state: RootState) => {
  if (!state.auth.access_token) {
    return undefined
  }

  const { role, email } = jwtDecode<JwtUser>(state.auth.access_token)

  return {
    role,
    email,
  } as const
}
