import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { withSuspense } from "../../HOC";

const Footer = withSuspense(() => {
  const [t] = useTranslation('Nav')
  return (
    <Body>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">

          </div>
          <div className="four wide column">
            <div className="ui link list">
              <a href="/" className="active item">{t('home')}</a>
              <a href="/stores/join" className="item">{t('join')}</a>
            </div>
          </div>
          <div className="four wide column"></div>
          <div className="four wide column"></div>
        </div>
      </div>
    </Body>
  );
});

const Body = styled.section`
  color: #333;
  padding:20px 0px;
  background-color: #F4F4F4;
`;

export { Footer };
