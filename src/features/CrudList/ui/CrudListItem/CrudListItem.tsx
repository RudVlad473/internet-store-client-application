import { Button, Image } from "antd"
import classNames from "classnames"
import React, { FC } from "react"

import { TCrudListItem } from "../../lib/types"
import styles from "./CrudListItem.module.scss"

type CrudListItemProps = TCrudListItem & {
  index: number
}

export const CrudListItem: FC<CrudListItemProps> = ({
  id,
  index,
  name,
  pictureUrl,
  onDelete,
  onEdit,
}) => {
  return (
    <section className={styles.item}>
      <div>{index}</div>
      <Image src={pictureUrl} width={50} />
      <h1 title={name} className={classNames("ellipsis")}>
        {name}
      </h1>
      <footer className={styles["btn-group"]}>
        <Button type="primary" onClick={() => onEdit(id)}>
          Edit
        </Button>
        <Button type="primary" danger onClick={() => onDelete(id)}>
          Delete
        </Button>
      </footer>
    </section>
  )
}
