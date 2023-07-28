import React from "react"
import { test, expect } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import Buttons from "../buttons.tsx"

test("component is in the document", () => {
  render(<Buttons />)
  expect(screen.getByTestId("buttons-component")).toBeInTheDocument()
})

test("component has button in it", () => {
  render(<Buttons />)
  expect(screen.getByTestId("buttons-component")).toContainHTML(
    "<button type='button' class='digit-button digit-button_0'>0</button>",
  )
})
