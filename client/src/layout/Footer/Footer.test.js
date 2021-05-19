import Footer from "./index";
import { screen } from "@testing-library/react";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("it renders a footer", () => {
    expect(screen.getByRole("footer")).toBeInTheDocument();
  });
});