import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCategorieProduct } from '../../Api/StoreApi/StoreApi';
import LoaderComponent from '../../Components/LoaderComponent/LoaderComponent';
import CardComponent from '../../Components/CardComponent/CardComponent';

export const ProductCategory = () => {
    const { categorie } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCategorieProduct(categorie).then((result) => setProducts(result.data));
    }, [categorie])

    return (
        <section>
            <div className="products__Section">
                <div className="container">
                    {products.length === 0
                        ? <LoaderComponent />
                        : products.map((el) => {
                            return (
                                <div className='product__Card' key={el.id}>
                                    <CardComponent img={el.image} title={el.title} text={el.text} id={el.id} />
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default ProductCategory