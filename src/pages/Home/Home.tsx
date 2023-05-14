import { CategoryMenu } from "../../features/CategoryMenu/ui"
import { ItemList } from "../../features/ItemList/ui"
import { HomeLayout } from "../../shared/ui"
import styles from "./Home.module.scss"

export const Home = () => {
  return (
    <HomeLayout>
      <div className={styles.content}>
        <aside className={styles.sider}>
          <CategoryMenu />
        </aside>

        <div className={styles.main}>
          <ItemList />
        </div>
      </div>
    </HomeLayout>
  )
}
