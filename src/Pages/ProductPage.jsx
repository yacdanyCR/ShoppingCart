import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { getIdProduct } from '../Api/StoreApi/StoreApi';

export const ProductPage = () => {
    const [productSelected, setproductSelected] = useState({});
    const { id } = useParams();

    useEffect(() => {
        getIdProduct(id).then((data) => setproductSelected(data));
    }, [id])

    return (
        <section>
            <Container>
                <Row>
                    <Col md={4}>
                        <img src={productSelected.image} alt="pho" style={{ width: '200px' }} />
                    </Col>
                    <Col md={8}>
                        <h1>{productSelected.title}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ProductPage