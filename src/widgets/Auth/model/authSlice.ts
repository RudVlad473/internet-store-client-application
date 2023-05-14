import { createSlice } from "@reduxjs/toolkit"

import { AuthUser } from "../../../entities/User/lib/types"

const initialState = {
  username: "",
  email: "",
  access_token: "",
} satisfies AuthUser

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate: (state) => {
      return state
    },
  },
})

export const { authenticate } = authSlice.actions
export const { reducer: authReducer } = authSlice
