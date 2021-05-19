import LogoutButton from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Logout button", () => {
  beforeEach(() => {
    renderWithReduxProvider(<LogoutButton handleClick={stubHandleClick} />);
  });

  test("it renders a logout button", () => {
    render(<LogoutButton />);
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });

  test("it logs user out and redirects user to home page", () => {
    const stubHandleLogOut = jest.fn();
    render(<LogoutButton handleLogOut={stubHandleLogOut} />);
    let btn = screen.getByRole("button", { name: "Logout" });
    userEvent.click(btn);
    expect(stubHandleLogOut).toHaveBeenCalledTimes(1);
  });
});
