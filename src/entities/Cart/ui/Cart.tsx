import { ShoppingCartOutlined } from "@ant-design/icons"
import { Badge } from "antd"
import React, { FC } from "react"

import { maxBadgeValue } from "../../../features/Details/consts/cart-items"

export const Cart: FC = () => {
  return (
    <Badge count={666} overflowCount={maxBadgeValue} size="default">
      <ShoppingCartOutlined style={{ fontSize: "32px" }} />
    </Badge>
  )
}
