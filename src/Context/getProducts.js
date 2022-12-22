import React, { useEffect, useState } from 'react'
import { getProducts } from '../Api/StoreApi/StoreApi';

export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
            getProductCategories(data);
        });
    }, [])

    const getProductCategories = (data) => {
        const categories = []
        data.forEach(element => categories.push(element.category));
        const uniqueCategories = [...(new Set(categories))];

        setCategories(uniqueCategories);
    }

    return (
        <ProductsContext.Provider value={{ products, categories }}>{children}</ProductsContext.Provider>
    )
}

export default ProductsProvider