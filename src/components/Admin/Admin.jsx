import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { productoSchema } from '../../firebase/schemas/productoSchema'

const item = {
    id: uuid(),
    nombre: 'Juan',
    descripcion: 'tachero promedio',
    marca: 'Peugeot',
    imagen: 'https...',
    precio: 12
}

export const Admin = () => {

    const [validate, setValidate] = useState(false)

    useEffect(() => {
        setValidate(productoSchema(item))
    }, [])

    return validate
        ? <h2>VALIDADO</h2>
        : <p>No validado</p>
}