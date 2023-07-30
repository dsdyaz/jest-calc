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

test("component contains calculation string and preResult", () => {
  render(<Screen />)
  expect(screen.getByTestId("screen")).toContainHTML("<span>(0)</span> 0")
})

test("component receives and displays data from props", () => {
  render(<Screen preResult="(5)" calculation="2+3" />)
  expect(screen.getByTestId("screen")).toContainHTML("<span>(5)</span> 2+3")
})
