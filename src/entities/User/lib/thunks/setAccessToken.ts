import { createAsyncThunk } from "@reduxjs/toolkit"

import { access_token } from "../../consts"
import { AccessToken } from "../types"

export const setAccessTokenFromLocalStorage = createAsyncThunk(
  "user/setAccessToken",
  async (payload: AccessToken) => {
    localStorage.setItem(access_token, payload.access_token)
  }
)
