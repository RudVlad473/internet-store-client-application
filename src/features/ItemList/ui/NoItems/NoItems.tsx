import React, { FC } from "react"

import styles from "./NoItems.module.scss"

export const NoItems: FC = () => {
  return <div className={styles["no-items"]}>No items were found</div>
}
