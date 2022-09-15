import React from "react";
import { render, screen } from "@testing-library/react";
import BoxList from "./BoxList";

test("BoxList renders", () => {
  render(<BoxList />);
});
