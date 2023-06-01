import { TUser } from "./user"

export type SigninUser = Pick<TUser, "email"> & {
  password: string
}
