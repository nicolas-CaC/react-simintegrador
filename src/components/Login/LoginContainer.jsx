import { useContext, useState } from "react"
import { commonLogin, signInWithGoogle } from "../../firebase";
import { LoginContext, Register, Login } from "."

export const LoginContainer = () => {

    const { firebaseLogin, waiting, wait, error, register, signup } = useContext(LoginContext);

    const [form, setForm] = useState({ name: '', pass: '' });

    function checkForm(e) {
        e.preventDefault();
        wait();
        const user = commonLogin(form.name, form.pass, error)
        firebaseLogin(user)
    }

    async function googleSignIn(e) {
        e.preventDefault()
        wait()
        const user = await signInWithGoogle(error)
        firebaseLogin(user)
    }

    function handleInputChange(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    return register
        ? <Register
            signup={ signup }
            waiting={ waiting }
            firebaseLogin={ firebaseLogin }
        // handleInputChange={ handleInputChange }
        />
        : <Login
            handleInputChange={ handleInputChange }
            waiting={ waiting }
            checkForm={ checkForm }
            googleSignIn={ googleSignIn }
            signup={ signup }
        />
}