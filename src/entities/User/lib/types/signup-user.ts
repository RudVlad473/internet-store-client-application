import { AuthUser } from "./auth-user"
import { SigninUser } from "./signin-user"

export type SignupUser = SigninUser & Pick<AuthUser, "userName">
