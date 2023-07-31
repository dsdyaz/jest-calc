import React from "react"
import { test, expect, describe } from "@jest/globals"
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

describe("component contains buttons and screen", () => {
  test("component contains buttons", () => {
    render(<Calculator />)
    const buttonsComponent = screen.getByTestId("buttons-component")
    expect(screen.getByTestId("calculator")).toContainElement(buttonsComponent)
  })
  test("component contains screen", () => {
    render(<Calculator />)
    const screenComponent = screen.getByTestId("screen")
    expect(screen.getByTestId("calculator")).toContainElement(screenComponent)
  })
})
