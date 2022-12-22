import React, { useContext, useState } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Button, Col, Offcanvas, Row } from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext';

export const ShoppingCart = () => {
    const { shoppingCartQuantity, cart } = useContext(CartContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <BsFillCartFill />
            </Button>

            <div style={{ position: 'relative', right: '1rem', top: '1rem', padding: '2px', width: '20px', textAlign: 'center', borderRadius: '20px', background: 'red' }}>
                <span>{shoppingCartQuantity()}</span>
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Products</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        {cart.map((el) => {
                            return (
                                <Col sm={12}>
                                    <h1>{el.title}</h1>
                                    <img src={el.img} alt="img_Product" />
                                </Col>
                            )
                        })}
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default ShoppingCart