import HTTPMethod from "http-method-enum"

import { apiSlice } from "../../../shared/api/apiSlice"
import { ItemPaths } from "../../../shared/lib/paths"
import { TItem, TItemJoined } from "../lib/types"

type TUpdateItemPayload = {
  itemId: Pick<TItem, "id">
  payload: Partial<Pick<TItem, "title" | "price" | "discountPercentage" | "type_id" | "brand_id">>
}

export const itemExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getItems: query<TItemJoined[], void>({
      query: () => ItemPaths.ITEM,
    }),

    getItemById: query<TItemJoined, Pick<TItem, "id">>({
      query: ({ id }) => [ItemPaths.ITEM, id].join("/"),
    }),

    createItem: mutation<TItemJoined, TItem>({
      query: (item) => ({
        url: ItemPaths.ITEM,
        method: HTTPMethod.POST,
        body: item,
      }),
    }),

    editItem: mutation<TItemJoined, TUpdateItemPayload>({
      query: ({ itemId, payload }) => ({
        url: [ItemPaths.ITEM, itemId].join("/"),
        method: HTTPMethod.PATCH,
        body: payload,
      }),
    }),

    deleteItem: mutation<TItemJoined, Pick<TItem, "id">>({
      query: ({ id }) => ({
        url: [ItemPaths.ITEM, id].join("/"),
        method: HTTPMethod.DELETE,
      }),
    }),
  }),
})

export const {
  useLazyGetItemsQuery,
  useCreateItemMutation,
  useDeleteItemMutation,
  useEditItemMutation,
  useGetItemsQuery,
  useLazyGetItemByIdQuery,
  useGetItemByIdQuery,
} = itemExtendedApi
