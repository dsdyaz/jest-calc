import React from "react";
import Buttons from "../buttons";
import { render, screen } from "@testing-library/react";

test("component is in the document", () => {
  render(<Buttons />);
  expect(screen.getByTestId("buttons-component")).toBeInTheDocument();
});

test("component has button in it", () => {
  render(<Buttons />);
  expect(screen.getByTestId("buttons-component")).toContainHTML(
    "<button class='digit-button digit-button_0'>0</button>",
  );
});
