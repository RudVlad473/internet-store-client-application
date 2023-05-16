import { Button } from "antd"
import { FC, useState } from "react"

import { CredentialsCard } from "../../../../entities/User/ui/CredentialsCard"
import { SigninForm } from "../../../../features/SigninForm/ui"
import { SignupForm } from "../../../../features/SignupForm/ui"
import { useAppDispatch, useAppSelector } from "../../../../shared/lib/hooks"
import { AuthPaths } from "../../../../shared/lib/paths"
import { FormType } from "../../lib/types"
import { dropCredentials, selectCredentials } from "../../model"
import styles from "./Auth.module.scss"

export const Auth: FC = () => {
  const dispatch = useAppDispatch()

  const [formType, setFormType] = useState<FormType>(AuthPaths.SIGN_UP)

  const credentials = useAppSelector(selectCredentials)

  const isSignin = formType === AuthPaths.SIGN_IN

  function handleFormSwitch() {
    setFormType(isSignin ? AuthPaths.SIGN_UP : AuthPaths.SIGN_IN)
  }

  return (
    <>
      {credentials ? (
        <div className={styles["signed-in"]}>
          <CredentialsCard {...credentials} />
          <Button type="primary" onClick={() => dispatch(dropCredentials())}>
            Logout
          </Button>
        </div>
      ) : (
        <div className={styles["auth-modal"]}>
          <div className={styles["switch-btn"]}>
            <Button type="link" onClick={handleFormSwitch}>
              {isSignin ? "Sign up" : "Sign in"}
            </Button>
          </div>
          {isSignin ? <SigninForm /> : <SignupForm />}
        </div>
      )}
    </>
  )
}
