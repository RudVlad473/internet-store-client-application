import { FC } from "react"

import { useGetItemsQuery } from "../../../../entities/Item/api"
import { NoItems } from "../NoItems"
import styles from "./ItemList.module.scss"

export const ItemList: FC = () => {
  const { data: items, isLoading, isSuccess, isError, error } = useGetItemsQuery()

  if (!items?.length) {
    return <NoItems />
  }

  return (
    <ul className={styles["item-list"]}>
      {items.map((item) => (
        <li key={item.id}>
          <ItemCard {...item} />
        </li>
      ))}
    </ul>
  )
}
