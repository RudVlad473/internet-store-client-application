import { Rate } from "antd"
import { FC, useEffect, useState } from "react"

import { useCreateRatingMutation, useLazyGetAverageRatingQuery } from "../../api"
import { TItem, TItemRating } from "../../lib/types"

type ItemRatingProps = {
  itemId: TItem["id"]
}

export const ItemRating: FC<ItemRatingProps> = ({ itemId }) => {
  const [rating, setRating] = useState<TItemRating["rating"] | undefined>(undefined)

  const [requestAvgRating, { isLoading, isFetching }] = useLazyGetAverageRatingQuery()
  const [createRating, { data: lastAvgRating, isLoading: isCreating }] = useCreateRatingMutation()

  useEffect(() => {
    requestAvgRating({ itemId }).then(({ data }) => setRating(data))
  }, [itemId, requestAvgRating])

  useEffect(() => {
    if (lastAvgRating) {
      setRating(lastAvgRating)
    }
  }, [lastAvgRating])

  return (
    <Rate
      allowHalf
      value={rating}
      disabled={isLoading || isFetching || isCreating}
      onChange={(rating) => createRating({ itemId, rating })}
    />
  )
}
