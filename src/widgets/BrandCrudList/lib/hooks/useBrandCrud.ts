import { useCallback, useEffect } from "react"
import { toast } from "react-toastify"

import {
  useCreateBrandMutation,
  useDeleteBrandMutation,
  useEditBrandMutation,
  useLazyGetBrandsQuery,
} from "../../../../entities/Brand/api"
import { TBrand } from "../../../../entities/Brand/lib/types"
import { CrudHookProps, CrudHooksReturnType } from "../../../../features/CrudList/lib/types"

export function useBrandCrud({
  onCreate,
  onRemove,
  onEdit,
}: CrudHookProps<TBrand>): CrudHooksReturnType<TBrand, TBrand["name"]> {
  const [requestCreate, { data: createdBrand }] = useCreateBrandMutation()
  const [requestEdit, { data: editedBrand }] = useEditBrandMutation()
  const [requestGetAll, { data: brands, isLoading, isFetching, error, isError }] =
    useLazyGetBrandsQuery()
  const [requestRemove, { data: removedBrand }] = useDeleteBrandMutation()

  useEffect(() => {
    createdBrand && onCreate?.(createdBrand)
    requestGetAll()
  }, [createdBrand, onCreate, requestGetAll])

  useEffect(() => {
    editedBrand && onEdit?.(editedBrand)
    requestGetAll()
  }, [editedBrand, onEdit, requestGetAll])

  useEffect(() => {
    removedBrand && onRemove?.(removedBrand)
    requestGetAll()
  }, [onRemove, removedBrand, requestGetAll])

  useEffect(() => {
    requestGetAll()
  }, [requestGetAll])

  useEffect(() => {
    if (error && isError) {
      toast.error(`An error occured when trying to fetch brands. Details: ${{ error }}`)
    }
  }, [error, isError, requestGetAll])

  return {
    create: useCallback((brand) => requestCreate(brand), [requestCreate]),

    edit: useCallback(
      (brandName, payload) => requestEdit({ currentBrandName: { name: brandName }, payload }),
      [requestEdit]
    ),

    getAll: useCallback(() => requestGetAll(), [requestGetAll]),

    remove: useCallback((brandName) => requestRemove({ name: brandName }), [requestRemove]),

    values: brands || [],
    loading: isLoading || isFetching,
  }
}
