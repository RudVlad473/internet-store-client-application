import { useGetCategoriesQuery } from "../../api"

export type Params = {
  limit?: number
}

export function useCategories() {
  const { data: categories, isLoading, isSuccess, isError, error } = useGetCategoriesQuery()

  return {
    categories: categories || [],
  } as const
}
