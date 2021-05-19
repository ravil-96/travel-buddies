import Login from "./index";
import { render, screen } from "@testing-library/react";

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

  test("it renders a login form", () => {
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

//   test("it sets username", () => {
//     expect(userStub.mock.calls[0][0].toEqual("John"));
//   });

//     test("it sets password", () => {
//       expect(userStub.mock("Enter username")).toBeInTheDocument();
//     });
});
