import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../components/Modal";

describe("Test the Modal", () => {
  it("Should open the modal", () => {
    let isOpen = true;
    const content = render(<Modal open={isOpen} />);
    const button = content.getByRole("button");
    const message = content.getByText("my message");

    expect(button).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });

  it("Should close the modal", () => {
    const handleCloseModal = jest.fn();
    const content = render(<Modal close={handleCloseModal} />);
    const button = content.getByRole("button");

    fireEvent.click(button);
    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });

  it("Should render text in the modal", () => {
    const content = render(<Modal message="Hello world" />);
    const text = content.getByText("Hello world");
    expect(text).toBeInTheDocument();
  });
});
