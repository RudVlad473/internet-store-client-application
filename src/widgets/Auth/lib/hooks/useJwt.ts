import jwtDecode from "jwt-decode"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { JwtUser } from "../../../../entities/User/lib/types"
import { useAppSelector } from "../../../../shared/lib/hooks"
import { dropAccessToken, selectToken, setAccessToken } from "../../model"

export function useJwtExpire() {
  const [expiryTime, setExpiryTime] = useState<number | undefined>(undefined)
  const token = useAppSelector(selectToken)
  const dispatch = useDispatch()

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token) as JwtUser
      const expiryTimeMs = decodedToken.exp * 1000
      setExpiryTime(expiryTimeMs) // Convert expiry time to milliseconds
    }
  }, [token])

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const checkAuthTimeout = () => {
      if (expiryTime) {
        const currentTime = Date.now()
        if (currentTime >= expiryTime) {
          // Token has expired, perform logout actions here
          //localStorage.removeItem("token") // Remove the token from local storage
          dispatch(dropAccessToken())
        } else {
          const timeRemaining = expiryTime - currentTime
          timeout = setTimeout(checkAuthTimeout, timeRemaining)
        }
      }
    }

    checkAuthTimeout()

    // Cleanup function
    return () => {
      clearTimeout(timeout)
    }
  }, [dispatch, expiryTime])
}
