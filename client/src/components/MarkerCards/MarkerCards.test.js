import MarkerCards from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
const mockStore = configureStore([]);

describe("HolidayCards", () => {
  let store;
  let component;
  const validateSpy = jest.fn();
  beforeEach(() => {
    store = mockStore({
      markers: [
        { title: "marker1", desc: "desc1", id: 1, location: [0, 1] },
        { title: "marker2", desc: "desc2", id: 1, location: [1, 0] },
      ],
      user: { socket: {emit: jest.fn()}}
    });


    render(
      <MemoryRouter>
        <Provider store={store}>
          <MarkerCards validateSpy={validateSpy} />
        </Provider>
      </MemoryRouter>
    );
  });

  test("it renders a list of marker cards", () => {
    expect(screen.queryAllByRole("listitem")).toHaveLength(2);
  });

  test("each card renders a delete button", () => {
    expect(screen.queryAllByRole("button")[0]).toBeInTheDocument();
  });

});
