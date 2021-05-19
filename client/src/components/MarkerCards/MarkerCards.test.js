import MarkerCards from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("MarkerCard", () => {
  beforeEach(() => {
    let testHoliday = { title: "fake holiday" };
    renderWithReduxProvider(<MarkerCards holiday={testHoliday} />);
  });

  test("it renders a marker card", () => {
    expect(
      screen.getByRole("markercards", { hidden: true })
    ).toBeInTheDocument();
  });
  test("it renders a button", () => {
    expect(
      screen.getAllByLabelText("button", { name: "X", hidden: true })
    ).toBeInTheDocument();
  });

  test("it renders a marker card with the holiday as a title", () => {
    const title = screen.getByText("Subtitle", { hidden: true });
    expect(title).toContain("testHoliday");
  });
});
