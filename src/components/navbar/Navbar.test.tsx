import React from "react";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

test("renders Navbar component", () => {
  const { getByTestId } = render(<Navbar />);
  const svgLogo = getByTestId("logo");
  expect(svgLogo).toBeInTheDocument();
});
