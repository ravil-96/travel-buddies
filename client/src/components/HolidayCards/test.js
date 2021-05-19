import HolidayCards from "./index";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";
const mockStore = configureStore([]);

describe('HolidayCards', () => {
    let store;
    let component;
   
    beforeEach(() => {
      store = mockStore({
        user: {holidays: [{title: 'Holiday1', id:1},{title: 'Holiday2', id:2}]}
      });
   
      store.dispatch = jest.fn();
   
      render(
        <MemoryRouter>
            <Provider store={store}>
                <HolidayCards />
            </Provider>
        </MemoryRouter>
      );
    });
   
        test("it renders a list of holiday cards with links", () => {
            expect(screen.queryAllByRole("link")).toHaveLength(2)
            
        });

        test("it renders links with text of holiday title ", () => {
            expect(screen.getByText("Holiday1")).toBeInTheDocument()
        })
        })