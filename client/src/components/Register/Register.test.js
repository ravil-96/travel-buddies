import Register from "./index";
import { render, screen } from "@testing-library/react";

describe("Register", () => {
  beforeEach(() => {
    renderWithReduxProvider(<Register />);
  });

//   test("it renders a register button", () => {
//     expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
//   });

//   test("it renders a close button", () => {
//     expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
//   });

  test("it renders a registration form, with a username field", () => {
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  test("it renders a registration form, with a email field", () => {
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  test("it renders a registration form, with a password field", () => {
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("it renders a registration form, with a confirm password field", () => {
    expect(screen.getByPlaceholderText("Confirm password")).toBeInTheDocument();
  });
});
