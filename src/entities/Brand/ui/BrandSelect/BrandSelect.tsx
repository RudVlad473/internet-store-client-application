import { Select } from "antd"
import { FC } from "react"

import { useGetBrandsQuery } from "../../api"

export const BrandSelect: FC = () => {
  const { data, isLoading, isFetching } = useGetBrandsQuery()

  const brands = data || []

  return (
    <Select
      showSearch
      placeholder="Select a type"
      optionFilterProp="children"
      loading={isFetching || isLoading}
      disabled={isLoading || isFetching}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={brands.map(({ id, name }) => ({
        label: name,
        value: id,
        key: id,
      }))}
    />
  )
}
