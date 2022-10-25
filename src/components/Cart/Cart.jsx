import { useContext } from "react"
import { CartContext } from "./CartContext"

export const Cart = () => {

    const { items } = useContext(CartContext)

    if (items.length > 0) {
        return (
            <div className="container">
                <h1 className="mb-4">Carrito:</h1>

                { items.map(({ id, nombre, marca, imagen, descripcion, precio, cantidad }) =>
                    <div className="card mb-3" key={ id }>
                        <div className="row g-0">
                            <div className="col-5 col-sm-4">
                                <img src={ imagen } className='img-fluid w-50' alt={ id } />
                            </div>
                            <div className="col-7 col-sm-8">
                                <div className="card-body">
                                    <h5 className="card-title">{ nombre }</h5>
                                    <h6 className="card-text">{ marca }</h6>
                                    <p className="card-text">{ descripcion }</p>
                                    <p className="card-text">
                                        <small className="text-muted">${ precio } - cantidad: { cantidad }</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>) }
                <button className="shadow fw-bold fs-5 w-100 btn btn-warning">Ir al checkout</button>
            </div>
        )
    }

    else {
        return (<h2>No tenes productos en tu carrito</h2>)
    }
}