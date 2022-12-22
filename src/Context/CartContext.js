import { createContext, useState } from "react"

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToShoppingCart = (data) => {
        const productObj = Object.assign({ quantity: 1 }, data);
        const productExist = cart.filter((el) => el.id === productObj.id).length > 0 ? true : false;

        if (!productExist) {
            setCart((prev) => {
                return [...prev, productObj]
            })
        } else {
            const index = cart.findIndex((el) => el.id === productObj.id);
            cart[index].quantity += 1;
        }

    }

    const shoppingCartQuantity = () => {
        return cart.length
    }

    const shoppingCartAllPrice = () => {
        if (cart.length > 0) {
            const quantities = cart.map((el) => el.quantity * el.price);
            return quantities.reduce((prev, curr) => prev + curr).toFixed(2);
        }
        return 0
    }

    const removeProductFromCart = (id) => {
        const prodictToRemove = cart.findIndex((el) => el.id === id);
        cart.splice(prodictToRemove, 1);
        setCart(cart);
    }

    return (
        <CartContext.Provider value={{ addToShoppingCart, shoppingCartQuantity, shoppingCartAllPrice, removeProductFromCart, cart, setCart }}>{children}</CartContext.Provider>
    )
}

export default CartProvider