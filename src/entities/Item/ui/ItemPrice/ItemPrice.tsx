import React, { FC } from "react"

import { getPriceWithDiscount } from "../.."
import { TItem } from "../../lib/types"
import styles from "./ItemPrice.module.scss"

type ItemPriceProps = Pick<TItem, "price" | "discountPercentage">

export const ItemPrice: FC<ItemPriceProps> = ({ price, discountPercentage }) => {
  const resultPrice = getPriceWithDiscount(price, discountPercentage || 0)

  return (
    <div className={styles["price-section"]}>
      {discountPercentage ? (
        <>
          <s className={styles["price"]}>{resultPrice} ₴</s>
          <h4 className={styles["discount"]}>{discountPercentage}</h4>
        </>
      ) : (
        <h3 className={styles["price"]}>{resultPrice} ₴</h3>
      )}
    </div>
  )
}
