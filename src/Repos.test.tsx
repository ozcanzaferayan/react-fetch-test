import { fireEvent, render, screen } from "@testing-library/react";
import Repos from "./Repos";

test("renders user's repos", async () => {
  render(<Repos />);
  const button = screen.getByText(/Get repos/i);
  fireEvent.click(button);

  const txtRepo = await screen.findByText(/boysenberry/i);
  expect(txtRepo).toBeInTheDocument();
});
