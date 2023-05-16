import { Menu } from "antd"
import { FC } from "react"

import { useCategories } from "../../../../entities/Category/lib/hooks"

export type CategoryMenuProps = { limit?: number }

export const CategoryMenu: FC<CategoryMenuProps> = ({ limit }) => {
  // const { categories } = useCategories({})
  // const menuItems = categoriesToMenuItems(categories)

  return (
    // <Menu
    //   onClick={(info) => {
    //     //TODO: put filtering logic here
    //   }}
    //   style={{ width: 256 }}
    //   mode="inline"
    //   items={menuItems}
    // />
    <></>
  )
}
