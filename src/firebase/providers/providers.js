import {
    createUserWithEmailAndPassword as register,
    signInWithEmailAndPassword as signin,
    signInWithPopup as popup,
    GoogleAuthProvider
} from "firebase/auth";
import { firebaseAuth } from "../";

const googleProvider = new GoogleAuthProvider()

function userProfile(user) {
    const { displayName, isAnonymous, photoURL, email, uid } = user;
    return { displayName, isAnonymous, email, photoURL, uid }
}

export const signInWithGoogle = async (error) => {
    try {
        const result = await popup(firebaseAuth, googleProvider)
        return userProfile(result.user);
    }
    catch (err) {
        error()
        console.log('Error de autenticación con google:', err)
    }
}

export const commonRegistration = async (name, pass, error) => {
    try {
        const result = await register(firebaseAuth, name, pass)
        return userProfile(result.user);
    }
    catch (err) {
        error()
        console.log('Error en el registro:', err)
    }
}

export const commonLogin = async (name, pass, error) => {
    try {
        const result = await signin(firebaseAuth, name, pass)
        return userProfile(result.user);
    }
    catch (err) {
        error()
        console.log('Error en el login:', err)
    }
}

