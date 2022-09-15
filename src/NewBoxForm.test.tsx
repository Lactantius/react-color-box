import React from "react";
import { render, screen } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("NewBoxForm renders", () => {
  const addBox = () => null;
  render(<NewBoxForm add={addBox} />);
});
