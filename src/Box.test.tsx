import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

const boxDefaults = (
  <Box width="50px" height="50px" color="#424242" remove={() => null} />
);

it("renders", () => {
  render(boxDefaults);
});

it("matches snapshot", () => {
  const { asFragment } = render(boxDefaults);
  expect(asFragment()).toMatchSnapshot();
});
