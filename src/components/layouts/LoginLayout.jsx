import { useContext } from "react"
import { LoginContainer, LoginContext } from "../Login"

export const LoginLayout = ({ children }) => {

    const { logged } = useContext(LoginContext)

    return logged
        ? children
        : <LoginContainer />
}