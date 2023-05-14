import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Badge, Space } from "antd"
import { FC } from "react"

import { User } from "../../../../entities/User/ui"
import { maxBadgeValue } from "../../consts/cart-items"

export const Details: FC = () => {
  return (
    <Space size={"large"}>
      <Badge count={maxBadgeValue}>
        <ShoppingCartOutlined />
      </Badge>
      <User />
      <MenuOutlined />
    </Space>
  )
}
