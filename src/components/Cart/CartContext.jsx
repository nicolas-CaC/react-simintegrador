import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0)
    const [items, setItems] = useState([])

    function addProducts(value, item) {
        if (value > 0) {
            setCartCount(cartCount + value)
            setItems([...items,
            { ...item, cantidad: value }])
        }
    }

    return (
        <CartContext.Provider value={ {
            addProducts,
            cartCount,
            items
        } }>
            { children }
        </CartContext.Provider>
    )
}