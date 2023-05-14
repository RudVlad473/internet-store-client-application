import { router } from "@app/lib"
import { RouterProvider } from "react-router-dom"

import "./index.scss"
import { withProviders } from "./providers"

function App() {
  return <RouterProvider router={router} />
}

export default withProviders(App)
