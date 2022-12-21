import React, { useEffect, useState } from 'react'
import { getProducts } from '../Api/StoreApi/StoreApi';

export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data)
        });
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>{children}</ProductsContext.Provider>
    )
}

export default ProductsProvider