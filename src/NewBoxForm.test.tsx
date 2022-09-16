import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

const addBox = () => null;

it("renders", () => {
  render(<NewBoxForm add={addBox} />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewBoxForm add={addBox} />);
  expect(asFragment()).toMatchSnapshot();
});
