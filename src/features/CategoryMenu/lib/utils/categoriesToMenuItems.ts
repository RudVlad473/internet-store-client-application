import { CategoryMenuProps } from "@features/CategoryMenu/ui"
import { Category as TCategory } from "@prisma/client"
import { MenuProps } from "antd"

type MenuItem = Required<MenuProps>["items"][number]

export function categoriesToMenuItems(categories: TCategory[]): MenuItem[] {
  const menuItems = categories.map(
    ({ id, name }) =>
      ({
        key: id,
        label: name,
      } as MenuItem)
  )

  return menuItems
}
