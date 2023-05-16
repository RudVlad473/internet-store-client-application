import { FC } from "react"

import { AuthUser, Roles } from "../../lib/types"
import styles from "./CredentialsCard.module.scss"

type CredentialsCardProps = Pick<AuthUser, "email" | "userName"> & {
  role: Roles
}

export const CredentialsCard: FC<CredentialsCardProps> = ({ email, userName, role }) => {
  return (
    <section className={styles.card}>
      <header>
        Username: <em className={styles.username}>{userName}</em>
      </header>
      <p>
        Role: <em className={styles.role}>{role}</em>
      </p>
      <footer>
        Email: <em className={styles.email}>{email}</em>
      </footer>
    </section>
  )
}
