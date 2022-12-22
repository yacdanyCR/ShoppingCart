import React, { useContext, useState } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Button, Col, Offcanvas, Row } from 'react-bootstrap'
import { CartContext } from '../../Context/CartContext';
import { VscChromeClose } from "react-icons/vsc";
import { successAlert } from '../../Alerts/alerts';

export const ShoppingCart = () => {
    const { updateQuantityShoppingCart, shoppingCartQuantity, shoppingCartAllPrice, removeProductFromCart, cart } = useContext(CartContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (product) => {
        removeProductFromCart(product.id);
        setShow(false)
        setTimeout(() => {
            setShow(true)
        }, 0);
        successAlert("Product Deleted")
    }

    const handleChange = (productid, e) => {
        updateQuantityShoppingCart(productid, e.target.value);
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
                    <Offcanvas.Title style={{ width: '100%', textAlign: 'center' }}>Products</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        {cart.map((el) => {
                            return (
                                <Col sm={12} style={{ marginBottom: '1rem', padding: '1rem' }}>
                                    <div className="delete__ShoppingCart" style={{ position: 'relative', left: '85%', fontSize: '2rem' }}>
                                        <VscChromeClose onClick={() => handleDelete(el)} size={35} color={'red'} style={{ cursor: 'pointer' }} />
                                    </div>
                                    <div className='shopping__Information'>
                                        <h3>{el.title}</h3>
                                        <img src={el.img} alt="img_Product" style={{ width: '100px' }} />
                                    </div>

                                    <div className='shopping__Operations'>
                                        <input style={{ borderRadius: '10px', textAlign: 'center', border: 'solid 1px' }} type='number' defaultValue={el.quantity} onChange={(e) => handleChange(el.id, e)} />
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <h3>{shoppingCartAllPrice()}$</h3>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
export default ShoppingCart