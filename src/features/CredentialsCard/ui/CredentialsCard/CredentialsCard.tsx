import { FC } from "react"

import { useGetOwnDetailsQuery } from "../../../../entities/User/api"
import { Spinner } from "../../../../shared/ui/Spinner"
import styles from "./CredentialsCard.module.scss"

export const CredentialsCard: FC = () => {
  const { data, isLoading, isFetching } = useGetOwnDetailsQuery()

  if (isLoading || isFetching) {
    return <Spinner />
  }

  if (!data) {
    throw new Error("Such user does not exist")
  }

  return (
    <section className={styles.card}>
      <header>
        Username: <em className={styles.username}>{data.userName}</em>
      </header>
      <p>
        Role: <em className={styles.role}>{data.role}</em>
      </p>
      <p>
        Created at: <em className={styles["created-at"]}>{data.createdAt}</em>
      </p>
      <footer>
        Email: <em className={styles.email}>{data.email}</em>
      </footer>
    </section>
  )
}
