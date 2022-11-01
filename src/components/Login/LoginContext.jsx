import { createContext, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {

    const [logged, setLogged] = useState(true);
    const [user, setUser] = useState(undefined);
    const [waiting, setWaiting] = useState(false);
    const [register, setRegister] = useState(false)

    function login() {
        setLogged(true)
    }

    function wait() {
        setWaiting(true)
    }

    function error() {
        setWaiting(false)
    }

    async function firebaseLogin(user) {

        const { displayName,
            isAnonymous,
            photoURL,
            email,
            uid } = await user;

        if (uid && !isAnonymous) {
            login()
            setUser({
                nombre: displayName,
                img: photoURL,
                email,
                uid
            })
        }
    }

    function logout() {
        setLogged(false);
        setUser(undefined);
        error();
    }

    function signup() {
        setRegister(!register)
    }


    return (
        <LoginContext.Provider
            value={ {
                firebaseLogin,
                register,
                waiting,
                logout,
                signup,
                logged,
                login,
                error,
                user,
                wait
            } }>
            { children }
        </LoginContext.Provider>
    )
}