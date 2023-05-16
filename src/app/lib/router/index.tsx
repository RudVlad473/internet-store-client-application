import { createBrowserRouter } from "react-router-dom"

import { Home } from "../../../pages/Home"
import { MiscCrud } from "../../../pages/MiscCrud"
import { CRUDRoutes, HomeRoutes, MiscRoutes } from "../../../shared/lib/routes"

export const router = createBrowserRouter([
  {
    path: HomeRoutes.HOME,
    element: <Home />,
  },
  {
    path: `${MiscRoutes.MISC}/${CRUDRoutes.CRUD}`,
    element: <MiscCrud />,
  },
])
