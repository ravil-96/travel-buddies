import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import rootReducer from "../reducer";

const TestProviders = ({ initState }) => {
  initState ||= { doggos: [], loading: false };
  const testStore = createStore(
    () => rootReducer(initState, { type: "@@INIT" }),
    applyMiddleware(thunk)
  );

  return ({ children }) => (
    <Provider store={testStore}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};

const renderWithReduxProvider = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

import axios from "axios";
jest.mock("axios");
axios.get.mockResolvedValue({ data: { message: [] } });

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
global.render = render;
global.userEvent = userEvent;
