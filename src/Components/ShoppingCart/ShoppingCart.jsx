import React, { useContext, useState } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Button, Col, Offcanvas, Row } from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext';
import { VscChromeClose } from "react-icons/vsc";

export const ShoppingCart = () => {
    const { shoppingCartQuantity, shoppingCartAllPrice, removeProductFromCart, cart } = useContext(CartContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (product) => {
        removeProductFromCart(product.id);
        setShow(false)
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                <BsFillCartFill size={20} />
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
                                <Col sm={12} style={{ marginBottom: '1rem' }}>
                                    <div className="delete__ShoppingCart" style={{ position: 'relative', left: '85%', fontSize: '2rem' }}>
                                        <VscChromeClose onClick={() => handleDelete(el)} size={35} color={'red'} style={{ cursor: 'pointer' }} />
                                    </div>
                                    <div className='shopping__Information'>
                                        <h3>{el.title}</h3>
                                        <img src={el.img} alt="img_Product" style={{ width: '100px' }} />
                                    </div>

                                    <div className='shopping__Operations'>
                                        <Button>+</Button>
                                        <input type='number' defaultValue={el.quantity}></input>
                                        <Button>-</Button>

                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <h1>{shoppingCartAllPrice()}$</h1>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default ShoppingCart