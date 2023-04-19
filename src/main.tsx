import { ApiProvider } from "@reduxjs/toolkit/dist/query/react"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"

import App from "./App"
import "./index.scss"
import { apiSlice } from "./shared/api"
import { store } from "./shared/lib/store"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiProvider>
  </React.StrictMode>
)
