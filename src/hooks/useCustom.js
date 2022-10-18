import { useState } from "react"

export const useCustom = (inicial = 0) => {

    const [valor, setValor] = useState(inicial)

    const suma = () => {
        setValor(valor + 1)
    }
    const resta = () => {
        setValor(valor - 1)
    }
    const multiplicacion = (val) => {
        setValor(valor * val)
    }

    const sumaIndefinida = (val = 2) => {
        setValor(valor + val)
    }

    return {
        valor,
        suma,
        resta,
        multiplicacion,
        sumaIndefinida
    }
}

