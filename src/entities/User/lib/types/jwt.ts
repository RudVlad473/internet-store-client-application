import { Roles } from "./roles"

export type JwtUser = {
  sub: string
  role: Roles
  email: string
  exp: number
}
