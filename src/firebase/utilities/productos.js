import {
    addDoc,
    collection,
    deleteDoc,
    updateDoc,
    getDocs,
    getDoc,
    setDoc,
    query,
    where,
    doc
} from "firebase/firestore/lite";
import { firebaseDb } from "../config/config";

// Referencia
const productosDb = collection(firebaseDb, 'productos')

// Obtener los productos
export const getProducts = async () => {
    const collection = await getDocs(productosDb)
    const products = collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id }
    })
    return products
}

// Agregar documento - addDoc
export const addProduct = (doc) => {
    // addDoc(referencia, documento)
    return addDoc(productosDb, doc)
}

// Agregar documentos 
export const addProducts = (docs) => {
    docs.forEach(doc => addProduct(doc))
}

// Obtener producto por Id (de la colección)
export const getProductById = (id) => {
    const itemRef = doc(firebaseDb, 'productos', id)
    getDoc(itemRef).then(res => console.log(res.data()))
}

// Obtener producto por nombre
export const getProductbyName = async (name) => {
    const dataRef = query(productosDb, where('nombre', '==', name))
    let found = await getDocs(dataRef)
    found = found.docs.map(doc => doc.data())
    console.log(found)
}

// Modificar con SET (si no lo encuentra lo crea)
export const setProduct = async (id, values, merge = false) => {
    const itemRef = doc(firebaseDb, 'productos', id)
    setDoc(itemRef, values, { merge })
}

// Modificar con UPDATE (si no lo encuentra no hace nada)
export const updateProduct = async (id, values) => {
    const itemRef = doc(firebaseDb, 'productos', id)
    updateDoc(itemRef, values)
}

// Borrar Documento
export const deleteProduct = (id) => {
    const itemRef = doc(firebaseDb, 'productos', id)
    deleteDoc(itemRef)
}