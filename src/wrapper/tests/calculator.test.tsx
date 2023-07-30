import React from "react"
import { test, expect } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import Calculator from "../calculator"

test("component is in the document", () => {
  render(<Calculator />)
  expect(screen.getByTestId("calculator")).toBeInTheDocument()
})

test("component is visible", () => {
  render(<Calculator />)
  expect(screen.getByTestId("calculator")).toBeVisible()
})

test("component is not empty", () => {
  render(<Calculator />)
  expect(screen.getByTestId("calculator")).not.toBeEmptyDOMElement()
})
