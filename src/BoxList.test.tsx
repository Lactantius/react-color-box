import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

jest.mock("uuid", () => ({ v4: () => "123456789" }));

it("renders", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});
