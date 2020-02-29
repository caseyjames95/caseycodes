import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

// Components
import Contact from '../Contact'

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className="container">
            <Navbar color="clear" light expand="md">
                <NavbarBrand id="navTitle" href="/">Casey<strong>Codes</strong></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink id="navSection"><Link to="/">Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="navSection"><Link to="/WebDev">Web Dev</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="navSection"><Link to="/GameDev">Game Dev</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="navSection"><Link to="/Contact">Contact</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;