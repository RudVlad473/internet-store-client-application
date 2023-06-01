import { OmitId } from "../../../../shared/lib/utils"
import { TBrand } from "../../../Brand/lib/types"
import { TTypeJoined } from "../../../Type/lib/types"

export type TItem = {
  id: string
  title: string
  price: number
  discountPercentage: number | null
  createdAt?: Date
  type_id: string
  brand_id: string | null
}

export type TItemJoined = TItem & {
  ItemPicture: {
    path: string
  }[]
  brand: OmitId<TBrand>
  type: TTypeJoined
}
