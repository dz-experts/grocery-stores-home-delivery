import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { withSuspense } from "../../HOC";

const Navbar = withSuspense(() => {
  const [t] = useTranslation('Nav');

  return (
    <NavbarBody>
      <div className="ui fixed inverted menu">
        <div className="ui container">
          <div className="ui secondary menu">
            <div className="item">
              <img src="" alt="logo" />
            </div>
            <div className="right menu">
              <a href="/" className="ui item">
                {t('home')}
              </a>
              <a href="/stores/join" className="ui item">
                {t('join')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </NavbarBody>
  );
});

const NavbarBody = styled.section`
    background-color: #f4f4f4;
`;

export { Navbar };
