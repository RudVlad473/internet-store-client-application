import HTTPMethod from "http-method-enum"

import { apiSlice } from "../../../shared/api/apiSlice"
import { CategoryPaths } from "../../../shared/lib/paths"
import { OmitId } from "../../../shared/lib/utils"
import { TCategory } from "../lib/types"

type TUpdateCategoryPayload = {
  currentCategoryName: Pick<TCategory, "name">
  payload: Partial<OmitId<TCategory>>
}

export const categoryExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getCategories: query<TCategory[], void>({
      query: () => CategoryPaths.CATEGORY,
    }),

    getCategory: query<TCategory[], Pick<TCategory, "name">>({
      query: ({ name }) => [CategoryPaths.CATEGORY, name].join("/"),
    }),

    createCategory: mutation<TCategory, OmitId<TCategory>>({
      query: (category) => ({
        url: CategoryPaths.CATEGORY,
        method: HTTPMethod.POST,
        body: category,
      }),
    }),

    editCategory: mutation<TCategory, TUpdateCategoryPayload>({
      query: ({ currentCategoryName: { name }, payload }) => ({
        url: [CategoryPaths.CATEGORY, name].join("/"),
        method: HTTPMethod.PATCH,
        body: payload,
      }),
    }),

    deleteCategory: mutation<TCategory, Pick<TCategory, "name">>({
      query: ({ name }) => ({
        url: [CategoryPaths.CATEGORY, name].join("/"),
        method: HTTPMethod.DELETE,
      }),
    }),
  }),
})

export const {
  useGetCategoriesQuery,
  useLazyGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
} = categoryExtendedApi
