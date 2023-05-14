import { UserOutlined } from "@ant-design/icons"
import { Avatar } from "antd"
import classNames from "classnames"
import React, { FC } from "react"

import { useBooleanState } from "../../../../shared/lib/hooks"
import { Portal } from "../../../../shared/ui/Portal"
import { Auth } from "../../../../widgets/Auth/ui/Auth"
import styles from "./User.module.scss"

export const User: FC = () => {
  const { state: showAuthModal, toggleState: toggleShowAuthModal } = useBooleanState(false)

  return (
    <div className={styles.wrapper}>
      <div onClick={() => toggleShowAuthModal()}>
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
