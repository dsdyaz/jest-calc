// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from "react"
import { test, expect } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import Operators from "../operators.tsx"

test("component is in the document", () => {
  render(<Operators />)
  expect(screen.getByTestId("operators-buttons")).toBeInTheDocument()
})

test("component is visible", () => {
  render(<Operators />)
  expect(screen.getByTestId("operators-buttons")).toBeVisible()
})

test("component is not empty", () => {
  render(<Operators />)
  expect(screen.getByTestId("operators-buttons")).not.toBeEmptyDOMElement()
})
