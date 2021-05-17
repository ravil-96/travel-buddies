import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import { Provider } from "react-redux";
import store from "./store";
import {fetchMarkers} from './actions/map/index'

store.dispatch(fetchMarkers)

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
