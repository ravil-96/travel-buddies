import MembersListItems  from "./index";
import { render, screen } from "@testing-library/react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('DropdownList', () => {
    let store;
   
    beforeEach(() => {
      store = mockStore({
        members: {
        creator: {username: 'user1'},
         members: [{username: 'user2'}, {username: 'user3'}],
         currentMembers: [{username: 'user1'}, {username: 'user3'}]
        }
      });
   
      store.dispatch = jest.fn();
   
      render(
            <Provider store={store}>
                <MembersListItems />
            </Provider>
      );
    });
   
        test("it renders a list of holiday cards with links", () => {
            expect(screen.queryAllByRole("listitem")).toHaveLength(3)
        });

        test("it renders a green icon when user is online", () => {
          const usericons = screen.queryAllByRole("img")
          expect(usericons[0].style.color).toBe('green')
      });

      test("it renders a red icon when user is offline", () => {
        const usericons = screen.queryAllByRole("img")
        expect(usericons[1].style.color).toBe('red')
    });

        })