import React from "react"
import Buttons from "../buttons"
import {render, screen} from '@testing-library/react'

test("component is in the document", () => {
    render(<Buttons />)
    expect(screen.getByTestId("buttons-component")).toBeInTheDocument()
})