import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("uuid", () => ({ v4: () => "123456789" }));

it("renders", () => {
  render(<App />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
