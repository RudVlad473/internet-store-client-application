import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode"

import { RootState } from "../../../app/lib"
import { AuthUser, Roles } from "../../../entities/User/lib/types"
import { JwtUser } from "../../../entities/User/lib/types/jwt"

const initialState: AuthUser = {
  userName: "",
  email: "",
  access_token: "",
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthUser>) => {
      const { access_token, email, userName } = action.payload

      state.access_token = access_token
      state.email = email
      state.userName = userName
    },
    dropCredentials: (state) => {
      state.access_token = state.email = state.userName = ""
    },
  },
})

export const { setCredentials, dropCredentials } = authSlice.actions
export const { reducer: authReducer } = authSlice

export const selectCredentials = (state: RootState) => {
  const isInitialized = Object.values(state.auth).every((credential) => credential)

  if (!isInitialized) {
    return undefined
  }

  const role = (jwtDecode(state.auth.access_token) as JwtUser).role || Roles.DEFAULT

  const credentials = {
    ...state.auth,
    role,
  } as const

  return credentials
}
