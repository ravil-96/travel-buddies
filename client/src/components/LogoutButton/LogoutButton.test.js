import LogoutButton from "./index";
import { render, screen } from "@testing-library/react";

describe("Logout button", () => {
  beforeEach(() => {
    renderWithReduxProvider(<LogoutButton />);
  });

  test("it renders a login button", () => {
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });
});