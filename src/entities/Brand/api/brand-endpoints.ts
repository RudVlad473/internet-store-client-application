import { apiSlice } from "../../../shared/api/apiSlice"
import { BrandPaths } from "../../../shared/lib/paths"
import { TBrand } from "../lib/types"

export const brandExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query }) => ({
    getBrands: query<TBrand[], void>({
      query: () => `${BrandPaths.BRAND}`,
    }),
  }),
})

export const { useGetBrandsQuery } = brandExtendedApi
