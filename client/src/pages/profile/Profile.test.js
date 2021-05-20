import Profile from ".";
import { render, screen } from "@testing-library/react";

describe("Profile", () => {
  test("it renders a div", () => {
    renderWithReduxProvider(<Profile />);
    const div = screen.getByRole("ProfilePage");
    expect(div).toBeInTheDocument();
  });
});
