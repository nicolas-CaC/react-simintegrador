import { useEffect, useState } from "react"

export const useFetch = (ruta = '/db.json', id = false) => {

    const [datos, setDatos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function getData() {
            let data
            data = await fetch(ruta)
            data = await data.json()

            data = id
                ? data.find(product => product.id === id)
                : data

            setLoading(false)
            setDatos(data)
        }
        setTimeout(() => { getData() }, 1000);
    }, [ruta, id])

    return { datos, loading }
}