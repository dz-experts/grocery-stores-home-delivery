import React, { lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { withSuspense } from "./HOC";

const Home = lazy(() =>
  import("./containers").then(({ Home }) => ({
    default: Home
  }))
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withSuspense(Home)} />
      </Switch>
    </BrowserRouter>
  );
};

const App = () => {
  return <Routes />;
};

export default App;
