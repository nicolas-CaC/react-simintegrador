import { createContext, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {

    const [logged, setLogged] = useState(true)

    return (
        <LoginContext.Provider
            value={ { logged } }>
            { children }
        </LoginContext.Provider>
    )
}