import { Select } from "antd"
import { FC } from "react"

import { SearchSelect } from "../../../../shared/ui/forms"
import { useGetCategoriesQuery } from "../../api"
import { TCategory } from "../../lib/types"

type CategorySelectProps = {
  onChange?: (id: TCategory["id"]) => void
  disabled?: boolean
  initValue?: string
}

export const CategorySelect: FC<CategorySelectProps> = ({
  onChange,
  initValue,
  disabled = false,
}) => {
  const { data: categories, isFetching, isLoading } = useGetCategoriesQuery()

  const categoriesOptions: { label: string; value: string }[] | undefined = categories?.map(
    ({ id, name }) => ({
      label: name,
      value: id,
      key: id,
    })
  )

  return <></>
}
