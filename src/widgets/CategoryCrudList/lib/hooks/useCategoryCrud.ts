import { useCallback, useEffect } from "react"
import { toast } from "react-toastify"

import {
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useLazyGetCategoriesQuery,
} from "../../../../entities/Category/api"
import { TCategory } from "../../../../entities/Category/lib/types"
import { CrudHookProps, CrudHooksReturnType } from "../../../../features/CrudList/lib/types"

export function useCategoryCrud({
  onCreate,
  onRemove,
  onEdit,
}: CrudHookProps<TCategory>): CrudHooksReturnType<TCategory, TCategory["name"]> {
  const [requestCreate, { data: createdCategory }] = useCreateCategoryMutation()
  const [requestEdit, { data: editedCategory }] = useEditCategoryMutation()
  const [requestGetAll, { data: categories, isLoading, isFetching, error, isError }] =
    useLazyGetCategoriesQuery()
  const [requestRemove, { data: removedCategory }] = useDeleteCategoryMutation()

  useEffect(() => {
    createdCategory && onCreate?.(createdCategory)
    requestGetAll()
  }, [createdCategory, onCreate, requestGetAll])

  useEffect(() => {
    editedCategory && onEdit?.(editedCategory)
    requestGetAll()
  }, [editedCategory, onEdit, requestGetAll])

  useEffect(() => {
    removedCategory && onRemove?.(removedCategory)
    requestGetAll()
  }, [onRemove, removedCategory, requestGetAll])

  useEffect(() => {
    requestGetAll()
  }, [requestGetAll])

  useEffect(() => {
    if (error && isError) {
      toast.error(`An error occured when trying to fetch categories. Details: ${{ error }}`)
    }
  }, [error, isError, requestGetAll])

  return {
    create: useCallback((brand) => requestCreate(brand), [requestCreate]),

    edit: useCallback(
      (categoryName, payload) =>
        requestEdit({ currentCategoryName: { name: categoryName }, payload }),
      [requestEdit]
    ),

    getAll: useCallback(() => requestGetAll(), [requestGetAll]),

    remove: useCallback((categoryName) => requestRemove({ name: categoryName }), [requestRemove]),

    values: categories || [],
    loading: isLoading || isFetching,
  }
}
