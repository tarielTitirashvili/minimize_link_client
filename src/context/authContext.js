import { createContext } from "react"

function noop(){}

const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop(),
  logOut: noop(),
  isAuth: false
})
export default AuthContext