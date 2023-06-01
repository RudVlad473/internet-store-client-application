import { FC } from "react"

import { TCategory } from "../../../../entities/Category/lib/types"
import { TCrudListItem } from "../../../../features/CrudList/lib/types"
import { CrudList } from "../../../../features/CrudList/ui/CrudList"
import { Spinner } from "../../../../shared/ui/Spinner"
import { useCategoryCrud } from "../../lib/hooks"
import { CategoryForm } from "../CategoryForm"

export const CategoryCrudList: FC = () => {
  const { create, edit, remove, values: categories, loading } = useCategoryCrud({})

  if (loading) {
    return <Spinner />
  }

  if (!categories) {
    return <></>
  }

  const crudListItems: TCrudListItem<TCategory>[] = categories.map((category) => ({
    id: category.id,
    name: category.name,
    BaseForm: CategoryForm,
    deleteProps: {
      name: "deleteCategory",
      onFinish: ({ name }) => {
        remove(name)
      },
      disabled: true,
      initialValues: category,
    },
    editProps: {
      name: "editCategory",
      onFinish: (payload) => {
        edit(category.name, payload)
      },
      disabled: false,
      initialValues: category,
    },
    readProps: {
      name: "readCategory",
      disabled: true,
      initialValues: category,
    },
  }))

  return (
    <CrudList
      items={crudListItems}
      BaseForm={CategoryForm}
      createProps={{
        name: "createCategory",
        disabled: false,
        onFinish: (payload) => create(payload),
      }}
    />
  )
}
