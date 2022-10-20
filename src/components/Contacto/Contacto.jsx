import { useState } from "react"


const initialState = { nombre: '', email: '', texto: '' }

export const Contacto = () => {

    const [form, setForm] = useState(initialState)

    const inputChangeHandle = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log(form);
    }

    return (
        <form name='formulario' className="col-4 mb-5">

            <input
                name='nombre'
                value={ form.nombre }
                type='text'
                className="form-control my-3"
                placeholder="Ingrese su nombre"
                onChange={ inputChangeHandle }
            />

            <input
                name='email'
                value={ form.email }
                type='email'
                className="form-control my-3"
                placeholder="Ingrese su email"
                onChange={ inputChangeHandle }
            />

            <textarea
                name="texto"
                value={ form.texto }
                className='form-control'
                placeholder="Ingrese su mensaje"
                rows={ 5 }
                onChange={ inputChangeHandle }
            />

            <button
                className="btn btn-primary my-3"
                onClick={ handleClick }
            >
                Enviar
            </button>


        </form>
    )
}