import { FC, PropsWithChildren } from "react"

import { Details } from "../../../../features/Details/ui/Details"
import { SearchBar } from "../../../../features/SearchBar/ui"
import styles from "./home-layout.module.scss"

export const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={styles["home-layout"]}>
      <div className={styles["search-bar"]}>
        <SearchBar />
      </div>

      <div className={styles["details"]}>
        <Details />
      </div>

      <section className={styles["children"]}>{children}</section>
    </main>
  )
}
