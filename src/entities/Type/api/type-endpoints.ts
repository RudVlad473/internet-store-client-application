import HTTPMethod from "http-method-enum"

import { apiSlice } from "../../../shared/api/apiSlice"
import { TypePaths } from "../../../shared/lib/paths"
import { OmitId } from "../../../shared/lib/utils"
import { TType, TTypeJoined } from "../lib/types"

type TUpdateTypePayload = {
  currentTypeName: Pick<TType, "name">
  payload: Partial<OmitId<TType>>
}

export const typeExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getTypes: query<TTypeJoined[], void>({
      query: () => TypePaths.TYPE,
    }),

    createType: mutation<TTypeJoined, OmitId<TType>>({
      query: (type) => ({
        url: TypePaths.TYPE,
        method: HTTPMethod.POST,
        body: type,
      }),
    }),

    editType: mutation<TTypeJoined, TUpdateTypePayload>({
      query: ({ currentTypeName: { name }, payload }) => ({
        url: [TypePaths.TYPE, name].join("/"),
        method: HTTPMethod.PATCH,
        body: payload,
      }),
    }),

    deleteType: mutation<TTypeJoined, Pick<TType, "name">>({
      query: ({ name }) => ({
        url: [TypePaths.TYPE, name].join("/"),
        method: HTTPMethod.DELETE,
      }),
    }),
  }),
})

export const {
  useLazyGetTypesQuery,
  useCreateTypeMutation,
  useDeleteTypeMutation,
  useEditTypeMutation,
  useGetTypesQuery,
} = typeExtendedApi
