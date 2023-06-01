import { createAsyncThunk } from "@reduxjs/toolkit"

import { access_token } from "../../consts"

export const removeAccessTokenFromLocalStorage = createAsyncThunk(
  "user/removeAccessToken",
  async () => {
    localStorage.removeItem(access_token)
  }
)
