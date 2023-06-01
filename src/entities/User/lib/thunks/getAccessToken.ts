import { createAsyncThunk } from "@reduxjs/toolkit"

import { access_token } from "../../consts"
import { AccessToken } from "../types"

export const getAccessTokenFromLocalStorage = createAsyncThunk(
  "user/getAccessToken",
  async (): Promise<AccessToken | undefined> => {
    const token = localStorage.getItem(access_token)

    if (!token) {
      return undefined
    }

    return {
      access_token: token,
    }
  }
)
