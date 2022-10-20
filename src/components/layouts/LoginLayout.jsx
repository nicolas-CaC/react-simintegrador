import { useContext } from "react"
import { Login, LoginContext } from "../Login"

export const LoginLayout = ({ children }) => {

    const { logged } = useContext(LoginContext)

    return logged
        ? children
        : <Login />
}