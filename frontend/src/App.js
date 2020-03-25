import React, { lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { withSuspense } from "./HOC";
import styled from 'styled-components';
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { i18n } from "./i18n";

const Home = lazy(() =>
  import("./containers").then(({ Home }) => ({
    default: Home
  }))
);

const AddStore = lazy(() =>
  import("./containers").then(({ AddStore }) => ({
    default: AddStore
  }))
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withSuspense(Home)} />
        <Route path="/stores/join" component={withSuspense(AddStore)} />
      </Switch>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
        <MainContainer>
          <Container>
            <Routes />
          </Container>
        </MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.section`
  min-height: 90vh;
`;

export default App;
