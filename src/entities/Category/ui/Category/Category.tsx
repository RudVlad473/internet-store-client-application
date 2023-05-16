import { Category as TCategory } from "@prisma/client"
import { FC } from "react"

export type CategoryProps = Pick<TCategory, "name">

export const Category: FC<CategoryProps> = ({ name }) => {
  return <h1>{name}</h1>
}
