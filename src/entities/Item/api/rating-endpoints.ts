import HTTPMethod from "http-method-enum"

import { apiSlice } from "../../../shared/api/apiSlice"
import { ItemPaths } from "../../../shared/lib/paths"
import { TItem, TItemJoined, TItemRatingJoined } from "../lib/types"

type TCreateItemPayload = { itemId: TItem["id"] } & Pick<TItemRatingJoined, "rating">

export const ratingExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    createRating: mutation<TItemRatingJoined["rating"], TCreateItemPayload>({
      query: ({ itemId, rating }) => ({
        url: [ItemPaths.ITEM, ItemPaths.RATING, itemId].join("/"),
        method: HTTPMethod.POST,
        body: {
          rating,
        },
      }),
    }),

    getAverageRating: query<TItemRatingJoined["rating"], { itemId: TItemJoined["id"] }>({
      query: ({ itemId }) => [ItemPaths.ITEM, ItemPaths.RATING, itemId].join("/"),
    }),
  }),
})

export const { useCreateRatingMutation, useGetAverageRatingQuery, useLazyGetAverageRatingQuery } =
  ratingExtendedApi
