import gif from './../../../assets/animations/cargando.gif'
import { useFetch } from "../../../hooks"
import { ItemList } from "./"

export const ItemListContainer = () => {

    const { datos, loading } = useFetch()

    return (
        loading
            ? <img src={ gif } alt={ gif } />
            : <ItemList datos={ datos } />
    )
}