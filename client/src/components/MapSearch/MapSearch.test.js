import MapSearch from "./index";
import {
  render,
  screen,
  cleanup,
  fireEvent,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import mockedAxios from "axios";

afterEach(cleanup);

describe("MapSearch", () => {
  beforeEach(() => {
    renderWithReduxProvider(<MapSearch />);
  });
//   test("it renders a dropdown search menu", () => {
//     const stubMapSearch = jest.fn();
//     render(<MapSearch handleMapSearch={stubMapSearch} />);
//     let btn = screen.getByRole("button", { name: "dropdown search" });
//     userEvent.click(btn);
//     expect(stubMapSearch).toHaveBeenCalledTimes(1);
//   });

  test("it renders a drop down search button", () => {
    expect(
      screen.getByRole("button", { name: "Search destination" })
    ).toBeInTheDocument();
  });

  test("change values of form input ", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <input type="search" onChange={handleChange} />
    );
    const input = container.firstChild;
    fireEvent.change(input, { target: { value: "a" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("a");
  });

  test("fetch location axios request", async () => {
    const data = {
      data: [
        {
          city: "London",
        },
        {
          city: "Glasgow",
        },
        {
          city: "New York",
        },
      ],
    };
    mockedAxios.get.mockResolvedValueOnce(data);
    const { getByText } = render(<MapSearch />);
    await (() => {
      expect(getByText("New York"));
    });
  });
});
