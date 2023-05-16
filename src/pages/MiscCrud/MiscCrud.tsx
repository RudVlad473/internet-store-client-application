import { Tabs, TabsProps } from "antd"
import { FC, useState } from "react"

import { SearchBar } from "../../features/SearchBar/ui"
import { HomeLayout } from "../../shared/ui"
import { BrandCrudList } from "../../widgets/BrandCrudList/ui"
import { NoCrudList } from "@widgets/CrudList/ui/NoCrudList"
import styles from "./MiscCrud.module.scss"

const tabs = ["Brand", "Type", "Category"] as const
type TTab = (typeof tabs)[number]
const items: TabsProps["items"] = tabs.map((misc) => ({
  key: misc,
  label: misc,
}))

const tabLists: { tab: TTab; crudListComponent: FC }[] = [
  {
    tab: "Brand",
    crudListComponent: BrandCrudList,
  },
  {
    tab: "Type",
    crudListComponent: BrandCrudList,
  },
  {
    tab: "Category",
    crudListComponent: BrandCrudList,
  },
]

export const MiscCrud: FC = () => {
  const [selectedTab, setSelectedTab] = useState<TTab>(tabs[0])

  const TabList: FC =
    tabLists.find(({ tab }) => tab === selectedTab)?.crudListComponent || NoCrudList

  return (
    <HomeLayout>
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.tabs}>
            <Tabs
              defaultActiveKey={tabs[0]}
              items={items}
              onChange={(e) => setSelectedTab(e as (typeof tabs)[number])}
            />
          </div>
          <div className={styles["search-bar"]}>
            <SearchBar />
          </div>
        </header>
        <section className={styles["crud-section"]}>
          <h1 className={styles["heading"]}>{selectedTab} CRUD</h1>
          <TabList />
        </section>
      </div>
    </HomeLayout>
  )
}
