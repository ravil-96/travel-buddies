import Profile from ".";

describe("Profile", () => {
  test("it renders a div", () => {
    renderWithReduxProvider(<Profile />);
    const div = screen.getByRole("ProfilePage");
    expect(div).toBeInTheDocument();
  });
});
