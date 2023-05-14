import { useGetItemsQuery } from "../../../../shared/api"

export function useItems() {
  const { data: items, isLoading, isSuccess, isError, error } = useGetItemsQuery()

  return {
    items: items || [],
  } as const
}
