import { UserOutlined } from "@ant-design/icons"
import { Avatar } from "antd"
import classNames from "classnames"
import React, { FC } from "react"

import { useAppSelector, useBooleanState } from "../../../../shared/lib/hooks"
import { Portal } from "../../../../shared/ui/Portal"
import { selectCredentials } from "../../../../widgets/Auth/model"
import { Auth } from "../../../../widgets/Auth/ui/Auth"
import { Roles } from "../../lib/types"
import styles from "./User.module.scss"

export const User: FC = () => {
  const { state: showAuthModal, toggleState: toggleShowAuthModal } = useBooleanState(false)
  const credentials = useAppSelector(selectCredentials)

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(
          styles.avatar,
          { [styles["avatar--active"]]: !!credentials },
          {
            [styles["avatar--admin"]]: credentials?.role === Roles.ADMIN,
          }
        )}
        onClick={() => toggleShowAuthModal()}>
        <Avatar size={64} icon={<UserOutlined />} />
      </div>

      <Portal>
        <div
          className={classNames(styles["auth-modal"], {
            [styles["auth-modal--active"]]: showAuthModal,
          })}>
          <Auth />
        </div>
      </Portal>
    </div>
  )
}
