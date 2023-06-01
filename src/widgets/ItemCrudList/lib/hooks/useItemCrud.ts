import { useCallback, useEffect } from "react"
import { toast } from "react-toastify"

import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useEditItemMutation,
  useLazyGetItemsQuery,
} from "../../../../entities/Item/api"
import { TItem, TItemJoined } from "../../../../entities/Item/lib/types"
import { CrudHookProps, CrudHooksReturnType } from "../../../../features/CrudList/lib/types"
import { TItemFormType } from "../types"

export function useItemCrud({
  onCreate,
  onRemove,
  onEdit,
}: CrudHookProps<TItemJoined>): CrudHooksReturnType<TItemFormType, TItemFormType["id"]> {
  const [requestCreate, { data: createdItem }] = useCreateItemMutation()
  const [requestEdit, { data: editedItem }] = useEditItemMutation()
  const [requestGetAll, { data: items, isLoading, isFetching, error, isError }] =
    useLazyGetItemsQuery()
  const [requestRemove, { data: removedItem }] = useDeleteItemMutation()

  useEffect(() => {
    createdItem && onCreate?.(createdItem)
    requestGetAll()
  }, [createdItem, onCreate, requestGetAll])

  useEffect(() => {
    editedItem && onEdit?.(editedItem)
    requestGetAll()
  }, [editedItem, onEdit, requestGetAll])

  useEffect(() => {
    removedItem && onRemove?.(removedItem)
    requestGetAll()
  }, [onRemove, removedItem, requestGetAll])

  useEffect(() => {
    requestGetAll()
  }, [requestGetAll])

  useEffect(() => {
    if (error && isError) {
      toast.error(`An error occured when trying to fetch brands. Details: ${{ error }}`)
    }
  }, [error, isError, requestGetAll])

  return {
    create: useCallback((item) => requestCreate(item), [requestCreate]),

    edit: useCallback(
      (itemId, payload) => requestEdit({ itemId: { id: itemId }, payload }),
      [requestEdit]
    ),

    getAll: useCallback(() => requestGetAll(), [requestGetAll]),

    remove: useCallback((itemId) => requestRemove({ id: itemId }), [requestRemove]),

    values: items || [],
    loading: isLoading || isFetching,
  }
}
