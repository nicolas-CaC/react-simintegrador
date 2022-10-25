import { CartBox } from "../../Cart"
import { Item } from "./"

export const ItemDetail = ({ item }) => {

    const { id, nombre, descripcion, marca, imagen, precio } = item

    return (
        <div>
            <h1>{ nombre }</h1>
            <h3>{ marca }</h3>
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <img src={ imagen } alt={ nombre } />
                    </div>
                    <div className="col align-self-center">
                        <div className="text-start">
                            <h4>Descripción del producto:</h4>
                            <p style={ { textAlign: 'justify' } }>{ descripcion }</p>
                            <br />

                            <h6>Id del producto:</h6>
                            <small>{ id.substring(0, 25) }...</small>
                            <br /><br />

                            <h4>Precio:</h4>
                            <p>{ precio }</p>

                            <Item />
                            <hr />
                            <CartBox item={ item } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}