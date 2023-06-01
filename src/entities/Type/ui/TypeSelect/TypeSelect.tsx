import { Select } from "antd"
import { FC } from "react"

import { useGetTypesQuery } from "../../api"

export const TypeSelect: FC = () => {
  const { data, isLoading, isFetching } = useGetTypesQuery()

  const types = data || []

  const typesOptions = types.map(({ id, name }) => ({
    label: name,
    value: id,
    key: id,
  }))

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
      options={typesOptions}
    />
  )
}
