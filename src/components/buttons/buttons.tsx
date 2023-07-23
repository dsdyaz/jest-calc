import React from "react"
import "../digit-buttons/digit-arr"
import "./buttons.css"
import DigitArr from "../digit-buttons/digit-arr"

export default function Buttons(): React.JSX.Element {
    return (
        <div data-testid="buttons-component" className="buttons">
            {DigitArr()}
            <button>,</button>
        </div>
    )
}