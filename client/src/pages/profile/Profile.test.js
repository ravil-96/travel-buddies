import Profile from ".";
import { screen } from "@testing-library/react";

describe("Profile", () => {
  test("it renders a the profile page", () => {
    renderWithReduxProvider(<Profile />);
    const div = screen.getByRole("ProfilePage");
    expect(div).toBeInTheDocument();
  });
});
