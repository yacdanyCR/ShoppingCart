import React, { useContext, useEffect } from 'react'
import CardComponent from '../../Components/CardComponent/CardComponent'
import { ProductsContext } from '../../Context/getProducts'
import LoaderComponent from '../../Components/LoaderComponent/LoaderComponent'
import './style.css'
import { getProducts } from '../../Api/StoreApi/StoreApi'

export const IndexPage = () => {
    const { products, setProducts } = useContext(ProductsContext);

    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data);
        });
    }, [])

    return (
        <section>
            <div className="products__Section">
                <div className="container">
                    {products.length === 0
                        ? <LoaderComponent />
                        : products.map((el) => {
                            return (
                                <div className='product__Card' key={el.id}>
                                    <CardComponent img={el.image} title={el.title} text={el.text} id={el.id} price={el.price} />
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default IndexPage