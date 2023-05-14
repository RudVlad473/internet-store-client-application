import { FC } from "react"

import { getPriceWithDiscount } from "../../lib"
import { TItem } from "../../lib/types"
import styles from "./ItemCard.module.scss"

export const ItemCard: FC<TItem> = ({
  title,
  discountPercentage,
  price,
  createdAt,
  rating,
  path,
}) => {
  const resultPrice = getPriceWithDiscount(price, discountPercentage || 0)

  return (
    <div className={styles["item-card"]}>
      <figure className={styles["gallery"]}>image here</figure>
      <header className={styles["title"]}>{title}</header>
      <h3 className={styles["price"]}>{resultPrice}</h3>
      <h4 className={styles["discount"]}>{discountPercentage}</h4>
      <footer className={styles["created-at"]}>{createdAt.toUTCString()}</footer>
    </div>
  )
}
