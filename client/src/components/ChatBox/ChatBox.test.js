import ChatBox from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from "react-router-dom";
import { addChat } from '../../actions'

const mockStore = configureStore([]);

describe("Chat box", () => {
    let store;
    let handleSend

    beforeEach(() => {
      handleSend = jest.fn()
      store = mockStore({
        chat: [{user:'user1', content:'content1'},{user:'user2', content: 'content2'}],
        user: {user:'user1', socket:{emit: jest.fn()}}
      });
   
      render(
        <MemoryRouter>
            <Provider store={store}>
                <ChatBox />
            </Provider>
        </MemoryRouter>
      );
    });
        
        test("it renders a toggle button", () => {
          expect(screen.getByRole("button", { name: "show messages" })).toBeInTheDocument()
        })
   
        test("clicking the button displays a chatbox", () => {
          const toggle = screen.getByRole("button", { name: "show messages" })
          userEvent.click(toggle)
          expect(screen.getByRole("dialog")).toBeInTheDocument()
        })

        test("chatbox contains a list of messages", () => {
          const toggle = screen.getByRole("button", { name: "show messages" })
          userEvent.click(toggle)
          expect(screen.getAllByRole("listitem")).toHaveLength(2)
        })

        test("chatbox contains a form and submit button", () => {
          const toggle = screen.getByRole("button", { name: "show messages" })
          userEvent.click(toggle)
          expect(screen.getByText("Send")).toBeInTheDocument
          expect(screen.getByRole("textbox")).toBeInTheDocument
        })

        // test("message is added on submitting form", () => {
        //   const toggle = screen.getByRole("button", { name: "show messages" })
        //   userEvent.click(toggle)
        //   const form = screen.getByRole("textbox")
        //   const send = screen.getByText("Send")
        //   userEvent.type(form, "Hello")
        //   userEvent.click(send)
        //   expect(handleSend).toHaveBeenCalled()
        // })



});
