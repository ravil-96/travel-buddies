import { screen } from "@testing-library/react";
import PageNotFound from ".";

describe("PageNotFound", () => {
  test("it renders a div", () => {
    renderWithReduxProvider(<PageNotFound />);
    const div = screen.getByRole("pageNotFound");
    expect(div).toBeInTheDocument();
  });
});
