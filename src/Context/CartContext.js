import { createContext, useState } from "react"

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToShoppingCart = (data) => {
        setCart((prev) => {
            return [...prev, data]
        })
    }

    const shoppingCartQuantity = () => {
        return cart.length
    }

    return (
        <CartContext.Provider value={{ addToShoppingCart, shoppingCartQuantity, cart }}>{children}</CartContext.Provider>
    )
}

export default CartProvider