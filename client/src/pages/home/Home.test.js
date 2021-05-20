import { screen } from "@testing-library/react";
import Home from ".";

describe("Home", () => {
  test("it renders a page container", () => {
    renderWithReduxProvider(<Home />);
    const page = screen.getByRole("article");
    expect(page).toBeInTheDocument();
  });
});
