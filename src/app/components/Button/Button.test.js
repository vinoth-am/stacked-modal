import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("<Button />", () => {
  const onClick = jest.fn();
  it("Button snapshot", () => {
    const { button } = render(<Button onClick={onClick} />);
    expect(button).toMatchSnapshot();
  });

  it("Validate the button", () => {
    const { getByTestId } = render(<Button onClick={onClick} />);
    const actionButton = getByTestId("actionButton");
    expect(actionButton).toBeTruthy();
  });

  it("Validate the button text", () => {
    const { getByTestId } = render(<Button onClick={onClick}>Open</Button>);
    const actionButton = getByTestId("actionButton");
    expect(actionButton).toHaveTextContent("Open");
  });

  it("Validate the button click", () => {
    const { getByTestId } = render(<Button onClick={onClick} />);
    const actionButton = getByTestId("actionButton");
    fireEvent.click(actionButton);
    expect(onClick).toBeCalledTimes(1);
  });
});
