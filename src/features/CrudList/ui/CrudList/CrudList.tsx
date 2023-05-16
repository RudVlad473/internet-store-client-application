import { Button } from "antd"
import { FC } from "react"

import { TCrudListItem } from "../../lib/types"
import { CrudListItem } from "../CrudListItem"
import styles from "./CrudList.module.scss"

type CrudListProps = {
  items: TCrudListItem[]
  onCreate: () => void
}

export const CrudList: FC<CrudListProps> = ({ items, onCreate }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        <li>
          {items.map((item, index) => (
            <CrudListItem key={item.id} {...item} index={index} />
          ))}
        </li>
        <li className={styles["create-btn"]}>
          <Button type="primary" onClick={onCreate}>
            Create
          </Button>
        </li>
      </ul>
    </div>
  )
}
