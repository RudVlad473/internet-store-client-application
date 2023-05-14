import { Input } from "antd"

const { Search } = Input

export const SearchBar = () => {
  return <Search placeholder="input item name" enterButton="Search" size="large" loading />
}
