import { useContext, useState } from "react"
import { CartContext } from "./CartContext";

export const CartBox = ({ item }) => {

    const [count, setCount] = useState(0);
    const { addProducts } = useContext(CartContext);

    function add() {
        setCount(count + 1)
    }

    function remove() {
        count > 0 && setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <div className="container">
            <div className="row gap-2">

                {/* Restar */ }
                <div className="col-1 align-end">
                    <button
                        className="btn btn-outline-danger"
                        onClick={ remove }>
                        -1
                    </button>
                </div>

                <div className="col">
                    <h5 className="text-center">
                        Cantidad: { count } unidad/es
                    </h5>
                </div>

                {/* Sumar */ }
                <div className="col-1 align-end">
                    <button
                        className="btn btn-outline-primary"
                        onClick={ add }>
                        +1
                    </button>
                </div>

            </div>

            <hr />

            <div className="row gap-2">
                <button
                    className="btn btn-secondary"
                    onClick={ () => addProducts(count, item) }
                >
                    Agregar al carrito
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={ reset }
                >
                    Reestablecer
                </button>
            </div>
        </div>
    )
}