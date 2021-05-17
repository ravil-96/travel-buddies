import React from "react";
import "./App.css";
import { Home, Profile, Holiday, PageNotFound } from "./pages";
import { Footer, Navbar, PrivateRoute } from "./layout";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/profile/" component={Profile} />
        <Route path="/holidays/:id" component={Holiday} key={Math.random()} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
