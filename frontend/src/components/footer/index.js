import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Body>
            <div className="ui container">
                <h1>Footer</h1>
            </div>
        </Body>
    )
}


const Body = styled.section`
    color:white;
    background-color: #333;
`;

export {Footer};