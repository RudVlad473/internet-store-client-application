import { TItemJoined } from "."
import { TUser } from "../../../User/lib/types"

export type TItemRating = {
  id: string
  rating: number
  item_id: string
  user_id: string
}

export type TItemRatingJoined = TItemRating & {
  item: TItemJoined
  user: TUser
}
