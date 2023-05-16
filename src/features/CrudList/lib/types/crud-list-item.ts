export type TCrudListItem = {
  id: string
  pictureUrl?: string
  name: string
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}
