import { configureStore } from "@reduxjs/toolkit"

import { authReducer } from "../../../widgets/Auth/model"

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})
