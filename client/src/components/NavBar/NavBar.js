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
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'

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
                            <NavLink id="navSection" href="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="navSection" href="/">Web Dev</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="navSection" href="/">Game Dev</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink id="navSection" href="/">Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;