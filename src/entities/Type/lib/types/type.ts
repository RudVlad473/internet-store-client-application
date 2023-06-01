import { OmitId } from "../../../../shared/lib/utils"
import { TCategory } from "../../../Category/lib/types"

export type TType = {
  id: string
  name: string
  category_id: TCategory["id"]
}

export type TTypeJoined = TType & {
  category: TCategory
}
