import React, { useContext } from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const CardComponent = (props) => {
    const { addToShoppingCart } = useContext(CartContext);

    const handleClick = (article) => {
        addToShoppingCart(article)
    }

    return (
        <Card style={{ width: '250px', padding: '1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', height: 'fit-auto' }}>
            <Card.Img variant="top" src={props.img} style={{ width: '100px' }} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Row style={{ marginTop: '2rem', width: '100%', textAlign: 'center' }}>
                    <Link to={`/product/${props.id}`}><Button variant="primary">See product</Button></Link>
                    <Button style={{ margin: '1rem 0' }} onClick={() => handleClick(props)} variant='success'>Add to cart</Button>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CardComponent