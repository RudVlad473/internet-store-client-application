import { Input } from "antd"
import { FC } from "react"

const { Search } = Input

export const SearchBar: FC = () => {
  return <Search placeholder="input item name" enterButton="Search" size="large" loading={false} />
}
