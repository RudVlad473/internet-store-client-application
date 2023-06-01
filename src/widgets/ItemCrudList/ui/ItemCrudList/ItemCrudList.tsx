import { FC, useCallback, useState } from "react"

import { TItemJoined } from "../../../../entities/Item/lib/types"
import { TCrudListItem } from "../../../../features/CrudList/lib/types"
import { CrudList } from "../../../../features/CrudList/ui"
import { Spinner } from "../../../../shared/ui/Spinner"
import { useItemCrud } from "../../lib/hooks"
import { usePictureCrud } from "../../lib/hooks/usePictureCrud"
import { TItemFormType } from "../../lib/types"
import { ItemForm } from "../ItemForm"

export const ItemCrudList: FC = () => {
  const [createdItem, setCreatedItem] = useState<TItemJoined | undefined>(undefined)
  const onCreate = useCallback((value: TItemJoined) => setCreatedItem(value), [])
  const {
    create: createItem,
    edit: editItem,
    remove: removeItem,
    values: items,
    loading,
  } = useItemCrud({
    onCreate,
  })
  const { createPicture, deletePicture } = usePictureCrud()

  if (loading) {
    return <Spinner />
  }

  if (!items) {
    return <></>
  }

  const crudListItems: TCrudListItem<TItemFormType>[] = items.map((item) => ({
    id: item.id,
    name: item.title,
    BaseForm: ItemForm,
    deleteProps: {
      name: "deleteItem",
      onFinish: ({ id }) => {
        removeItem(id)
      },
      disabled: true,
      initialValues: item,
    },
    editProps: {
      name: "editItem",
      onFinish: (payload) => {
        editItem(item.id, payload)
      },
      disabled: false,
      initialValues: item,
    },
    readProps: {
      name: "readItem",
      disabled: true,
      initialValues: item,
    },
  }))

  return (
    <CrudList
      items={crudListItems}
      BaseForm={ItemForm}
      createProps={{
        name: "createItem",
        disabled: loading,
        onFinish: ({ itemPictures, ...item }) => {
          createItem(item)

          if (itemPictures?.length && createdItem) {
            const itemId = createdItem.id
            const pictures = itemPictures
              .map(({ originFileObj }) => {
                const blob = originFileObj && new Blob([originFileObj])
                if (!blob) {
                  return undefined
                }
                const file = new File([blob], originFileObj.name, {
                  ...originFileObj,
                })
                return file
              })
              .filter((v) => v) as File[]
            createPicture({
              itemId,
              pictures,
            })
          }
        },
      }}
    />
  )
}
