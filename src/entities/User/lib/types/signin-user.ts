import { AuthUser } from "./auth-user"

export type SigninUser = Pick<AuthUser, "email"> & {
  password: string
}
