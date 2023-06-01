import { useCallback, useEffect } from "react"
import { toast } from "react-toastify"

import {
  useCreateTypeMutation,
  useDeleteTypeMutation,
  useEditTypeMutation,
  useLazyGetTypesQuery,
} from "../../../../entities/Type/api"
import { TType, TTypeJoined } from "../../../../entities/Type/lib/types"
import { CrudHookProps, CrudHooksReturnType } from "../../../../features/CrudList/lib/types"

export function useTypeCrud({
  onCreate,
  onRemove,
  onEdit,
}: CrudHookProps<TTypeJoined>): CrudHooksReturnType<TTypeJoined, TType["name"]> {
  const [requestCreate, { data: createdType }] = useCreateTypeMutation()
  const [requestEdit, { data: editedType }] = useEditTypeMutation()
  const [requestGetAll, { data: types, isLoading, isFetching, error, isError }] =
    useLazyGetTypesQuery()
  const [requestRemove, { data: removedType }] = useDeleteTypeMutation()

  useEffect(() => {
    createdType && onCreate?.(createdType)
    requestGetAll()
  }, [createdType, onCreate, requestGetAll])

  useEffect(() => {
    editedType && onEdit?.(editedType)
    requestGetAll()
  }, [editedType, onEdit, requestGetAll])

  useEffect(() => {
    removedType && onRemove?.(removedType)
    requestGetAll()
  }, [onRemove, removedType, requestGetAll])

  useEffect(() => {
    requestGetAll()
  }, [requestGetAll])

  useEffect(() => {
    if (error && isError) {
      toast.error(`An error occured when trying to fetch types. Details: ${{ error }}`)
    }
  }, [error, isError, requestGetAll])

  return {
    create: useCallback((brand) => requestCreate(brand), [requestCreate]),

    edit: useCallback(
      (typeName, payload) => requestEdit({ currentTypeName: { name: typeName }, payload }),
      [requestEdit]
    ),

    getAll: useCallback(() => requestGetAll(), [requestGetAll]),

    remove: useCallback((typeName) => requestRemove({ name: typeName }), [requestRemove]),

    values: types || [],
    loading: isLoading || isFetching,
  }
}
