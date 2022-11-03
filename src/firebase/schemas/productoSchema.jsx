// import PropTypes from 'prop-types'
import { numberValidator, stringValidator } from "../utilities/validadores";

// export const Componente = ({ variable }) => {
//     return (
//         <div>{ variable }</div>
//     )
// }

// Componente.propTypes = {
//     variable: PropTypes.string
// }

export const productoSchema = (item) => {

    const { id, nombre, descripcion, marca, imagen, precio } = item

    let confirm = true;

    const validation = {
        id: stringValidator(id),
        nombre: stringValidator(nombre),
        descripcion: stringValidator(descripcion),
        marca: stringValidator(marca),
        imagen: stringValidator(imagen),
        precio: numberValidator(precio)
    }

    const values = Object.values(validation)

    for (let value of values) {
        console.log(value);
        if (!value) confirm = false
    }

    return confirm
}