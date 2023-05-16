import { configureStore } from "@reduxjs/toolkit"

import { apiSlice } from "../../../shared/api"
import { authReducer } from "../../../widgets/Auth/model"

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})
