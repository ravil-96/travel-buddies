import LogoutButton from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();
const route = '/profile'
history.push(route)

describe("Logout button", () => {
  beforeEach(() => {
  });

  test("it renders a logout button", () => {
    render(<LogoutButton />);
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });

  // test("it logs user out and redirects user to home page", () => {
  //   const stubHandleLogOut = jest.fn();
  //   renderWithReduxProvider(<Router history={history}><LogoutButton handleLogOut={stubHandleLogOut} /></Router>);
  //   let btn = screen.getByRole("button", { name: "Logout" });
  //   userEvent.click(btn);
  //   expect(stubHandleLogOut).toHaveBeenCalledTimes(1);
  // });
  
});
