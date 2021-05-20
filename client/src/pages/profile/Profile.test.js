import Profile from ".";
import { render, screen } from "@testing-library/react";

describe("Profile", () => {
  test("it renders a page container", () => {
    renderWithReduxProvider(<Profile />);
    const page = screen.getByRole("article");
    expect(page).toBeInTheDocument();
  });
});
