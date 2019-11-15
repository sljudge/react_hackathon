
import React, { useState } from "react";
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import history from '../history';

const NavBar = props => {
    return(
        <>
            <Nav>
                <NavItem>
                    <NavLink>
                    Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    About
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    Contact
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                    Back
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    )
}

export default NavBar;