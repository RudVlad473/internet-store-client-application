import { useDeleteBrandMutation } from "../../../../entities/Brand/api"
import { useCreatePicturesMutation } from "../../../../entities/Item/api"

export function usePictureCrud() {
  const [createPicture] = useCreatePicturesMutation()
  const [deletePicture] = useDeleteBrandMutation()

  return {
    createPicture,
    deletePicture,
  }
}
