import MapSearch from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("MapSearch", () => {
  beforeEach(() => {
    renderWithReduxProvider(<MapSearch />);
  });
  //   test("it renders a dropdown search menu", () => {
  //     const stubMapSearch = jest.fn();
  //     render(<MapSearch handleMapSearch={stubMapSearch} />);
  //     let btn = screen.getByRole("DropdownButton");
  //     userEvent.click(btn);
  //     expect(stubMapSearch).toHaveBeenCalledTimes(1);
  //   });

  test("it renders a drop down search button", () => {
    expect(
      screen.getByRole("button", { name: "Search destination" })
    ).toBeInTheDocument();
  });
    // test("it renders a search form", () => {
    //   expect(
    //     screen.getByPlaceholderText("form", { name: "Enter location" })
    //   ).toBeInTheDocument();
    // });
});
