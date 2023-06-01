import { SigninUser } from "./signin-user"

export type SignupUser = SigninUser & {
  userName: string
}
