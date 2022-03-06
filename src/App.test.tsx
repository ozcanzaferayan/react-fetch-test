import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import fetchMock from "jest-fetch-mock";
import fetch from "jest-fetch-mock";

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test("renders user data", async () => {
  render(<App />);
  const button = screen.getByText(/Get user/i);
  fetch.mockResponseOnce(
    JSON.stringify({
      name: "The Octocat",
      followers: "100",
      following: "200",
    })
  );

  fireEvent.click(button);

  const txtUsername = await screen.findByText(/The Octocat/i);
  expect(txtUsername).toBeInTheDocument();
});
