import compose from "compose-function"

import { withRedux } from "./withRedux"
import { withRtkQuery } from "./withRtkQuery"

export const withProviders = compose(withRedux, withRtkQuery)
