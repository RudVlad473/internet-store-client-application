import { Roles } from "./roles"

export type TUser = {
  id: string
  email: string
  createdAt: string
  userName: string
  role: Roles
}

export type TSafeUser = Pick<TUser, "createdAt" | "userName">

export type TFullUser = TSafeUser & Pick<TUser, "role" | "email">
