import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import BoxList from "./BoxList";

jest.mock("uuid", () => ({ v4: () => "123456789" }));

it("renders", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can remove a box", () => {
  render(<BoxList />);
  const deleteButton = screen.getByText("X");
  expect(deleteButton).toBeInTheDocument();
  fireEvent.click(deleteButton);
  expect(deleteButton).not.toBeInTheDocument();
});
