import { useEffect, useState } from "react"
import gif from './../../../assets/animations/cargando.gif'
import { api } from "../../../services/Api"
import { ItemList } from "./"
import { useFetch } from "../../../hooks"

export const ItemListContainer = () => {

    const { datos, loading } = useFetch()

    return (
        loading
            ? <img src={ gif } alt={ gif } />
            : <ItemList datos={ datos } />
    )
}