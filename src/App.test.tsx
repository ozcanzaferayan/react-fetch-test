import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("renders user data", async () => {
  render(<App />);
  const button = screen.getByText(/Get user/i);
  fireEvent.click(button);

  const txtUsername = await screen.findByText(/The Octocat/i);
  expect(txtUsername).toBeInTheDocument();
});
