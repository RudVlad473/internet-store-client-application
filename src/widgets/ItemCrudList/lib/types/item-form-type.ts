import { UploadFile } from "antd"

import { TItem, TItemJoined } from "../../../../entities/Item/lib/types"

export type TItemFormType = Omit<TItem, "createdAt"> & {
  itemPictures?: UploadFile[]
}
