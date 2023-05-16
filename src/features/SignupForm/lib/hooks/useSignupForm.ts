import { useEffect, useMemo, useState } from "react"

import { useSignupMutation } from "../../../../entities/User/api"
import { SignupUser } from "../../../../entities/User/lib/types"
import { useAppDispatch } from "../../../../shared/lib/hooks"
import { allValuesTruthy } from "../../../../shared/lib/utils"
import { setCredentials } from "../../../../widgets/Auth/model"

export function useSignupForm() {
  const [signupData, setSignupData] = useState<SignupUser>({
    email: "",
    password: "",
    userName: "",
  })

  const [signup, { isLoading, isSuccess, isError, error, data }] = useSignupMutation()

  const dispatch = useAppDispatch()

  const isDataValidated = useMemo(() => allValuesTruthy(signupData), [signupData])

  useEffect(() => {
    if (isDataValidated && data?.access_token) {
      const credentials = {
        email: signupData.email,
        userName: signupData.userName,
        access_token: data.access_token,
      }

      dispatch(setCredentials(credentials))
    }
  }, [data, dispatch, isDataValidated, signupData])

  useEffect(() => {
    if (isDataValidated) {
      signup(signupData)
    }
  }, [isDataValidated, signup, signupData])

  return {
    setSignupData,
    isLoading,
    isSuccess,
    isError,
    error,
  }
}
