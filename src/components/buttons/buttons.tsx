import React from "react"
import "./buttons.css"
import Operators from "../operators/operators.tsx"
import DigitArr from "../digit-buttons/digit-arr.tsx"

export default function Buttons(): React.JSX.Element {
  return (
    <div data-testid="buttons-component" className="buttons">
      <div className="buttons__main">
        {DigitArr()}
        <button type="button">,</button>
        <button type="button" className="button-delete">
          DEL
        </button>
      </div>

      <div className="buttons__operators">
        <Operators />
      </div>
    </div>
  )
}
