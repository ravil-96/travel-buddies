import React from "react";
import "./App.css";
import { Home, Profile, Holiday, PageNotFound, Temp } from "./pages";
import { Footer, Navbar, PrivateRoute } from "./layout";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/profile/" component={Profile} />
        <Route path="/holidays/:id" component={Holiday} />
        <Route path="/temp" component={Temp} />
        <Route path="/" component={PageNotFound} />
      </Switch>
  );
}

export default App;
