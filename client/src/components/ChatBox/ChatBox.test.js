import ChatBox from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Chat box", () => {
  beforeEach(() => {
    renderWithReduxProvider(<ChatBox />);
  });

  test("it renders a chatbox open button", () => {
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("it displays messages in the chatbox", () => {
    const stubMessages = jest.fn();
    renderWithReduxProvider(<ChatBox displayMessage={stubMessages} />);
    let chat = screen.getByRole("button", { name: "show messages" });
    userEvent.click(chat);
    expect(stubMessages).toHaveBeenCalledTimes(1);
  });
});
