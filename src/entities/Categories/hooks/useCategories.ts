import { useGetCategoriesQuery } from "@shared/api"

export type Params = {
  limit?: number
}

export function useCategories({ limit }: Params) {
  const { data: categories, isLoading, isSuccess, isError, error } = useGetCategoriesQuery()

  return {
    categories: categories || [],
  } as const
}
