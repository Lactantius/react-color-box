import React from "react";
import { render, screen } from "@testing-library/react";
import Box from "./Box";

test("Box renders", () => {
  render(<Box width="50px" height="50px" color="orange" remove={() => null} />);
});
