import { Link } from "react-router-dom"
import { Item } from "./"

export const ItemList = ({ datos }) => {

    const containerCss = "row row-cols-1 row-cols-lg-4 row-cols-md-3 g-3 position-absolute top-0"

    return (
        <div
            className={ containerCss }
            style={ { marginTop: '7em' } }
        >
            { datos.map(item =>
                <Link
                    key={ item.id }
                    to={ `/item/${item.id}` }
                    className='text-decoration-none'
                >
                    <Item item={ item } />
                </Link>)
            }
        </div >
    )
}