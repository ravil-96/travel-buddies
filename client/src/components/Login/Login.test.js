import Login from "./index";
import Profile from "../../pages/Profile";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

describe("Login", () => {
  beforeEach(() => {
    const userStub = { name: "John", passwrod: "123" };
    renderWithReduxProvider(<Login userStub={userStub} />);
  });

  test("it renders a login button", () => {
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  test("it renders a login button", () => {
    expect(
      screen.getByRole("button", { name: "Create New Account" })
    ).toBeInTheDocument();
  });

  test("it renders a login form, with a username field", () => {
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  test("it renders a login form, with a password field", () => {
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("it redirects user to their profile page after a successful login", () => {

    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useHistory: () => ({
        push: jest.fn(),
      }),
    }));
  });

  //   test("it sets username", () => {
  //     expect(userStub.mock.calls[0][0].toEqual("John"));
  //   });

  //     test("it sets password", () => {
  //       expect(userStub.mock("Enter username")).toBeInTheDocument();
  //     });
});
