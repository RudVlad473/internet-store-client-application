import { Image, Tooltip } from "antd"
import classNames from "classnames"
import { FC } from "react"
import { NavLink } from "react-router-dom"

import placeholderItemImage from "../../../../shared/lib/assets/placeholder-item-image.webp"
import { ItemRoutes } from "../../../../shared/lib/routes"
import { TItemJoined } from "../../lib/types"
import { CreatedAt } from "../CreatedAt"
import { ItemPrice } from "../ItemPrice"
import styles from "./ItemCard.module.scss"

export const ItemCard: FC<TItemJoined> = ({
  id,
  ItemPicture,
  brand,
  brand_id,
  discountPercentage,
  price,
  title,
  type,
  type_id,
  createdAt,
}) => {
  return (
    <NavLink to={`/${ItemRoutes.ITEM}/${id}`}>
      <div className={styles["item-card"]}>
        <figure
          className={styles["gallery"]}
          onClickCapture={(e) => {
            e.preventDefault()
          }}>
          <Image src={ItemPicture[0]?.path} alt={title} fallback={placeholderItemImage} />
        </figure>
        <Tooltip title={title} trigger="hover">
          <header className={classNames(styles["title"], "ellipsis")}>{title}</header>
        </Tooltip>
        <ItemPrice {...{ price, discountPercentage }} />
        <div className={styles["created-at"]}>
          <CreatedAt dateString={String(createdAt)} />
        </div>
      </div>
    </NavLink>
  )
}
