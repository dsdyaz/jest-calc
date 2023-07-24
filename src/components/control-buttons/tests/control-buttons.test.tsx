import React from "react"
import Controls from "../control-buttons"
import {render, screen} from '@testing-library/react'

test("component is in the document", () => {
    render(<Controls />)
    expect(screen.getByTestId("control-buttons")).toBeInTheDocument()
})

test("component is visible", () => {
    render(<Controls />)
    expect(screen.getByTestId("control-buttons")).toBeVisible()
})

test("component is not empty", () => {
    render(<Controls />)
    expect(screen.getByTestId("control-buttons")).not.toBeEmptyDOMElement()
})