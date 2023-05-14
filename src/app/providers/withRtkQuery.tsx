import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"

import { apiSlice } from "../../shared/api"

export const withRtkQuery = (component: () => React.ReactNode) => () => {
  return <ApiProvider api={apiSlice}>{component()}</ApiProvider>
}
