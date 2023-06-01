import HTTPMethod from "http-method-enum"

import { apiSlice } from "../../../shared/api/apiSlice"
import { BrandPaths } from "../../../shared/lib/paths"
import { OmitId } from "../../../shared/lib/utils/omit-id"
import { TBrand } from "../lib/types"

type TUpdateBrandPayload = {
  currentBrandName: Pick<TBrand, "name">
  payload: Partial<OmitId<TBrand>>
}

export const brandExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getBrands: query<TBrand[], void>({
      query: () => BrandPaths.BRAND,
    }),

    getBrand: query<TBrand[], Pick<TBrand, "name">>({
      query: ({ name }) => [BrandPaths.BRAND, name].join("/"),
    }),

    createBrand: mutation<TBrand, OmitId<TBrand>>({
      query: (brand) => ({
        url: BrandPaths.BRAND,
        method: HTTPMethod.POST,
        body: brand,
      }),
    }),

    editBrand: mutation<TBrand, TUpdateBrandPayload>({
      query: ({ currentBrandName: { name }, payload }) => ({
        url: `${BrandPaths.BRAND}/${name}`,
        method: HTTPMethod.PATCH,
        body: payload,
      }),
    }),

    deleteBrand: mutation<TBrand, Pick<TBrand, "name">>({
      query: ({ name }) => ({
        url: `${BrandPaths.BRAND}/${name}`,
        method: HTTPMethod.DELETE,
      }),
    }),
  }),
})

export const {
  useLazyGetBrandsQuery,
  useLazyGetBrandQuery,
  useCreateBrandMutation,
  useEditBrandMutation,
  useDeleteBrandMutation,
  useGetBrandsQuery,
} = brandExtendedApi
