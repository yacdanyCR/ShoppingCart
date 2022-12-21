import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const CardComponent = (props) => {
    return (
        <Card style={{ width: '15rem', padding: '1rem' }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}

export default CardComponent