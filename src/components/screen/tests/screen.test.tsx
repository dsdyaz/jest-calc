import React from "react"
import { test, expect } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import Screen from "../screen"

test("component is in the document", () => {
  render(<Screen />)
  expect(screen.getByTestId("screen")).toBeInTheDocument()
})

test("component is visible", () => {
  render(<Screen />)
  expect(screen.getByTestId("screen")).toBeVisible()
})

test("component is not empty", () => {
  render(<Screen />)
  expect(screen.getByTestId("screen")).not.toBeEmptyDOMElement()
})
