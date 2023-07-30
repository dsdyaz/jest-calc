import React from "react"
import Screen from "../components/screen/screen"
import Buttons from "../components/buttons/buttons"

export default function Calculator(): React.JSX.Element {
  return (
    <div className="calculator" data-testid="calculator">
      <Screen />
      <Buttons />
    </div>
  )
}
