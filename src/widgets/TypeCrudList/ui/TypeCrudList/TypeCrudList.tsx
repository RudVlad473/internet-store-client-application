import { FC } from "react"

import { TTypeJoined } from "../../../../entities/Type/lib/types"
import { TCrudListItem } from "../../../../features/CrudList/lib/types"
import { CrudList } from "../../../../features/CrudList/ui"
import { Spinner } from "../../../../shared/ui/Spinner"
import { useTypeCrud } from "../../lib/hooks"
import { TypeForm } from "../TypeForm"

export const TypeCrudList: FC = () => {
  const { create, edit, remove, values: categories, loading } = useTypeCrud({})

  if (loading) {
    return <Spinner />
  }

  if (!categories) {
    return <></>
  }

  const crudListItems: TCrudListItem<TTypeJoined>[] = categories.map((type) => ({
    id: type.id,
    name: type.name,
    BaseForm: TypeForm,
    deleteProps: {
      name: "deleteType",
      onFinish: ({ name }) => {
        remove(name)
      },
      disabled: true,
      initialValues: type,
    },
    editProps: {
      name: "editType",
      onFinish: (payload) => {
        edit(type.name, payload)
      },
      disabled: false,
      initialValues: type,
    },
    readProps: {
      name: "readType",
      disabled: true,
      initialValues: type,
    },
  }))

  return (
    <CrudList
      items={crudListItems}
      BaseForm={TypeForm}
      createProps={{
        name: "createType",
        disabled: false,
        onFinish: (payload) => create(payload),
      }}
    />
  )
}
