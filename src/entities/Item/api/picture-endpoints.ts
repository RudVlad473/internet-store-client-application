import HTTPMethod from "http-method-enum"

import { apiSlice } from "../../../shared/api/apiSlice"
import { ItemPicturePaths } from "../../../shared/lib/paths"
import { TItem, TItemPicture } from "../lib/types"

// type TUpdateItemPayload = {
//   itemId: Pick<TItem, "id">
//   payload: Partial<Pick<TItem, "title" | "price" | "discountPercentage" | "type_id" | "brand_id">>
// }

export const itemPictureExtendedApi = apiSlice.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    createPictures: mutation<TItemPicture[], { itemId: TItem["id"]; pictures: File[] }>({
      query: ({ itemId, pictures }) => ({
        url: [itemId, ItemPicturePaths.ITEM_PICTURE].join("/"),
        method: HTTPMethod.POST,
        body: pictures,
      }),
    }),

    deletePicture: mutation<TItemPicture[], { pictureId: TItemPicture["id"] }>({
      query: ({ pictureId }) => ({
        url: [ItemPicturePaths.ITEM_PICTURE, pictureId].join("/"),
        method: HTTPMethod.DELETE,
      }),
    }),
  }),
})

export const { useCreatePicturesMutation, useDeletePictureMutation } = itemPictureExtendedApi
