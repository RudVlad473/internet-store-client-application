import { MenuOutlined } from "@ant-design/icons"
import { Button, Dropdown } from "antd"
import { FC } from "react"

import { useAppSelector } from "../../../shared/lib/hooks"
import { selectCredentials } from "../../../widgets/Auth/model"
import { Roles } from "../../User/lib/types"
import { adminUserMenu, defaultUserMenu } from "../lib/menus"

export const Menu: FC = () => {
  const credentials = useAppSelector(selectCredentials)

  const role = credentials?.role || Roles.DEFAULT
  const menuItems = role === Roles.ADMIN ? adminUserMenu : defaultUserMenu

  return (
    <div>
      <Dropdown menu={{ items: menuItems }} placement="bottomLeft" arrow>
        <Button icon={<MenuOutlined />} size="large" />
      </Dropdown>
    </div>
  )
}
