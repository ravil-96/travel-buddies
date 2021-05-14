import React from "react";
import "./App.css";
import { Home, Profile, Holiday, PageNotFound, Temp } from "./pages";
import { Footer, Navbar } from "./layout";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/holidays" component={Holiday} />
        <Route path="/temp" component={Temp} />
        <Route path="/" component={PageNotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
