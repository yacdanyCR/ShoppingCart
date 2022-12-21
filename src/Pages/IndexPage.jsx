import React, { useContext } from 'react'
import NavBarComponent from '../Components/NavBarComponent/NavBarComponent'
import CardComponent from '../Components/CardComponent/CardComponent'
import { ProductsContext } from '../Context/getProducts'
import { Col, Container, Row } from 'react-bootstrap'

export const IndexPage = () => {
    const { products } = useContext(ProductsContext);

    return (
        <>
            <header>
                <NavBarComponent />
            </header>
            <main>
                <section>
                    <Container>
                        <Row className='justify-content-md-center'>
                            {products.map((el) => {
                                return (
                                    <Col md={4}>
                                        <CardComponent img={el.image} title={el.title} text={el.text} />
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                </section>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default IndexPage