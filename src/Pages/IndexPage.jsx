import React, { useContext } from 'react'
import CardComponent from '../Components/CardComponent/CardComponent'
import { ProductsContext } from '../Context/getProducts'
import { Col, Container, Row } from 'react-bootstrap'

export const IndexPage = () => {
    const { products } = useContext(ProductsContext);

    return (
        <section>
            <Container>
                <Row className='justify-content-md-center' style={{ margin: '3rem', display: 'flex', justifyContent: 'center' }}>
                    {products.map((el) => {
                        return (
                            <Col md={4} key={el.id} style={{ display: 'flex', justifyContent: 'center' }}>
                                <CardComponent img={el.image} title={el.title} text={el.text} id={el.id} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default IndexPage