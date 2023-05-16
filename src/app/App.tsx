import { RouterProvider } from "react-router-dom"

import "./index.scss"
import { router } from "./lib"
import { withProviders } from "./providers"

function App() {
  return <RouterProvider router={router} />
}

export default withProviders(App)
