import React, { useContext } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import jslogo from '../../assets/img/jslogo.png'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import { ProductsContext } from '../../Context/getProducts'

export const NavBarComponent = () => {
    const { categories } = useContext(ProductsContext);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={jslogo} alt="navbarlogo" style={{ width: '100px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'}>Home</Link>
                        <Link href="#link">About</Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            {categories.map((el, index) => {
                                return (
                                    <NavDropdown.Item key={index}>
                                        <Link to={`products/category/${el}`}>{el}</Link>
                                    </NavDropdown.Item>
                                )
                            })}
                        </NavDropdown>
                    </Nav>
                    <ShoppingCart />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarComponent