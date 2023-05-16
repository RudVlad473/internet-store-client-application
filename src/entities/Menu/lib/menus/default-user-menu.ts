import { MenuProps } from "antd"

export const defaultUserMenu: MenuProps["items"] = ["Edit credentials"].map((label, index) => ({
  key: index + 1,
  label,
}))
