import React from "react"

export default function Operators(): React.JSX.Element {
  return (
    <div className="operators" data-testid="operators-buttons">
      <button type="button">/</button>
      <button type="button">x</button>
      <button type="button">-</button>
      <button type="button">+</button>
    </div>
  )
}
