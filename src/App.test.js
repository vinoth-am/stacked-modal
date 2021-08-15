import { render } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("App snapshot", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

test("Validate the child component in App component", () => {
  const { getByText } = render(<App />);
  expect(getByText("Welcome!!")).toBeInTheDocument();
});
