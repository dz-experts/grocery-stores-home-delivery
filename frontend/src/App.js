import React, { lazy } from "react"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import { Container } from "semantic-ui-react"
import { withSuspense } from "./HOC"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"

const Home = lazy(() =>
  import("./containers").then(({ Home }) => ({
    default: Home
  }))
)

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={withSuspense(Home)} />
      </Switch>
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Routes />
      </Container>
      <Footer />
    </>
  )
}

export default App
