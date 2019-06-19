import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Route } from "@simple-contacts/react-router-async-routes"

import './assets/scss/App.scss'
import Nav from "./components/nav"
import Home from "./pages/home"
import Search from "./pages/search"
import Error404 from "./pages/errors/404"
import User from "./pages/user";
import Api from "./api/api";

const IsLoading = () => {
  return 'Loada'
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="*" render={
          props => <Nav {...props}></Nav>
        }/>
        <Suspense fallback={<IsLoading/>}>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/search" component={Search}></Route>
            <Route async path="/user/:username" render={
              async (routeProps) => {
                try {
                  const response = await Api.getUser(routeProps.match.params.username)
                  if (response.data !== null) {
                    return <User data={response.data} {...routeProps}></User>
                  }
                  return <Error404></Error404>
                } catch (error) {
                  return <Error404></Error404>
                }
              }
            }></Route>
            <Route component={Error404}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
