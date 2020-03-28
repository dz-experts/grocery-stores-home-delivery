import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Body>
      <div className="ui container">
      <div className="ui grid">
        <div className="four wide column">
          
        </div>
        <div className="four wide column">
          <div className="ui link list">
            <a href="/" className="active item">Home</a>
            <a href="/stores/join" className="item">Join</a>
          </div>
        </div>
        <div className="four wide column"></div>
        <div className="four wide column"></div>
      </div>
      </div>
    </Body>
  );
};

const Body = styled.section`
  color: #333;
  padding:20px 0px;
  background-color: #F4F4F4;
`;

export { Footer };
