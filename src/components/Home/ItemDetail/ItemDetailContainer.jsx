import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../../../hooks"
import { ItemDetail } from "./ItemDetail"

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const { datos: item, loading } = useFetch(undefined, id)

    return loading
        ? <div className="spinner-border text-info" role='status' />
        : <ItemDetail item={ item } />
}