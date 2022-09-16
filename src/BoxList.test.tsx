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

it("can add a box", () => {
  render(<BoxList />);
  expect(screen.getAllByText("X").length).toBe(1);

  // Fill out form
  fireEvent.change(screen.getByLabelText("Box Width"), {
    target: { value: "100" },
  });
  fireEvent.change(screen.getByLabelText("Box Height"), {
    target: { value: "200" },
  });
  fireEvent.change(screen.getByLabelText("Box Color"), {
    target: { value: "#555555" },
  });
  fireEvent.click(screen.getByText("New Box"));
  expect(screen.getAllByText("X").length).toBe(2);
});
