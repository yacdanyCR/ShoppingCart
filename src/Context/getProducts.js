import React, { useEffect, useState } from 'react'
import { getProducts } from '../Api/StoreApi/StoreApi';

export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getProductCategories = (data) => {
        const categories = []
        data.forEach(element => categories.push(element.category));
        const uniqueCategories = [...(new Set(categories))];

        setCategories(uniqueCategories);
    }

    useEffect(() => {
        getProducts().then((data) => {
            getProductCategories(data);
        });
    }, [])



    return (
        <ProductsContext.Provider value={{ products, categories, setProducts, getProductCategories }}>{children}</ProductsContext.Provider>
    )
}

export default ProductsProvider