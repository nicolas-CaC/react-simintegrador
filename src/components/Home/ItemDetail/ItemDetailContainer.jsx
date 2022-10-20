import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"
import { useFetch } from "../../../hooks"

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const { datos: item, loading } = useFetch(undefined, id)

    return loading
        ? <div className="spinner-border text-info" role='status' />
        : <ItemDetail item={ item } />
}