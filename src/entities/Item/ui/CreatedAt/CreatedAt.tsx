import React, { FC } from "react"

import { formatDate } from "../../../../shared/lib/utils"
import styles from "./CreatedAt.module.scss"

export type CreatedAtProps = {
  dateString: string
}

export const CreatedAt: FC<CreatedAtProps> = ({ dateString }) => {
  return <div className={styles["created-at"]}>Added at {formatDate(String(dateString))}</div>
}
