import MemberList from "./index";
import { render, screen } from "@testing-library/react";

describe("DropdownList", () => {
  beforeEach(() => {
    render(<MemberList />);
  });

  test("it a dropdown button", () => {
    expect(screen.getByText(/Holiday members/)).toBeInTheDocument()
  });
});
