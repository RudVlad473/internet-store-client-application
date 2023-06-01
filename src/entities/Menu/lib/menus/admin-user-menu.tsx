import { MenuProps } from "antd"
import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

import { CRUDRoutes, ItemRoutes, MiscRoutes } from "../../../../shared/lib/routes"

export const adminUserMenu: MenuProps["items"] = [
  <NavLink
    to={`/${MiscRoutes.MISC}/${CRUDRoutes.CRUD}`}
    key={`${MiscRoutes.MISC}/${CRUDRoutes.CRUD}`}>
    CRUD Misc
  </NavLink>,
  <NavLink
    to={`/${ItemRoutes.ITEM}/${CRUDRoutes.CRUD}`}
    key={`${ItemRoutes.ITEM}/${CRUDRoutes.CRUD}`}>
    CRUD Items
  </NavLink>,
].map((label, index) => ({
  key: index + 1,
  label,
}))
