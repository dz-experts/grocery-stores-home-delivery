import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <NavbarBody>
            <div className="ui container">
            <h2>Navbar</h2>
            
            </div>            
        </NavbarBody>
        
    );
}

const NavbarBody = styled.section`
    color:#fff;
    background-color: #333;
`;

export { Navbar };