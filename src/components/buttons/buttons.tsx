import React from "react"
import "./buttons.css"
import DigitArr from "../digit-buttons/digit-arr.tsx"

export default function Buttons(): React.JSX.Element {
  return (
    <div data-testid="buttons-component" className="buttons">
      <div className="buttons__digits">
        {DigitArr()}
        <button type="button">,</button>
      </div>
    </div>
  )
}
