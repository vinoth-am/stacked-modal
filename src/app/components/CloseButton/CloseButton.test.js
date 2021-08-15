import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CloseButton } from "./CloseButton";

describe("<CloseButton />", () => {
  const onClick = jest.fn();
  it("CloseButton snapshot", () => {
    const { button } = render(<CloseButton onClick={onClick} />);
    expect(button).toMatchSnapshot();
  });

  it("Validate the close button", () => {
    const { getByTestId } = render(<CloseButton onClick={onClick} />);
    const closeButton = getByTestId("closeButton");
    expect(closeButton).toBeTruthy();
  });

  it("Validate the close button text", () => {
    const { getByTestId } = render(
      <CloseButton onClick={onClick}>X</CloseButton>
    );
    const closeButton = getByTestId("closeButton");
    expect(closeButton).toHaveTextContent("X");
  });

  it("Validate the close button click", () => {
    const { getByTestId } = render(<CloseButton onClick={onClick} />);
    const closeButton = getByTestId("closeButton");
    fireEvent.click(closeButton);
    expect(onClick).toBeCalledTimes(1);
  });
});
