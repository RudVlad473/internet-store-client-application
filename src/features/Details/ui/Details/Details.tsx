import { Space } from "antd"
import { FC } from "react"

import { Cart } from "../../../../entities/Cart/ui"
import { Menu } from "../../../../entities/Menu/ui"
import { Roles } from "../../../../entities/User/lib/types"
import { User } from "../../../../entities/User/ui"
import { useAppSelector } from "../../../../shared/lib/hooks"
import { selectCredentials } from "../../../../widgets/Auth/model"

export const Details: FC = () => {
  const credentials = useAppSelector(selectCredentials)

  const isDefaultUser = credentials?.role === Roles.DEFAULT

  return (
    <Space size={"large"}>
      {isDefaultUser && <Cart />}
      <User />
      <Menu />
    </Space>
  )
}
