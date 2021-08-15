import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StackedModal } from "./StackedModal";
import { renderHook } from "@testing-library/react-hooks";

describe("<StackedModal />", () => {
  const ref = {
    current: {
      onOpen: jest.fn(),
      onClose: jest.fn(),
    },
  };

  it("StackedModal snapshot", () => {
    const { modal } = render(<StackedModal />);
    expect(modal).toMatchSnapshot();
  });

  it("Validate the modal", () => {
    const { getByTestId } = render(<StackedModal />);
    const stackedModal = getByTestId("stackedModal");
    expect(stackedModal).toBeTruthy();
  });

  it("Validate add modal", () => {
    renderHook(() => StackedModal((ref, ref.current.onOpen())));
    expect(ref.current.onOpen).toHaveBeenCalled();
  });

  //   it("Validate the modal header", () => {
  //     const { getByTestId } = render(<StackedModal header="Modal" />);
  //     const modalHeader = getByTestId("modalHeader");
  //     expect(modalHeader).toBeInTheDocument();
  //   });

  //   it("Validate the modal content", () => {
  //     const { getByTestId } = render(<StackedModal content="Content" />);
  //     const modalHeader = getByTestId("modalContent");
  //     expect(modalHeader).toBeInTheDocument();
  //   });
});
