import React, { useState } from "react"
import Screen from "../components/screen/screen"
import Buttons from "../components/buttons/buttons"

export default function Calculator(): React.JSX.Element {
  const [calculation, setCalculation] = useState("")
  const [result, setResult] = useState("")

  const operators = ["/", "*", "-", "+", "."]

  function calculate(arg: string) {
    // eslint-disable-next-line no-new-func
    return Function(`return(${arg})`)()
  }

  const updateCalculator = (value: string) => {
    if (
      (operators.includes(value) && calculation === "") ||
      (operators.includes(value) && operators.includes(calculation.slice(-1)))
    ) {
      return null
    }

    setCalculation(calculation + value)

    if (!operators.includes(value)) {
      const calcResult =
        calculate(calculation + value) % 1 === 0
          ? calculate(calculation + value)
          : calculate(calculation + value).toPrecision(3)
      setResult(calcResult.toString())
    }

    return null
  }
  return (
    <div className="calculator" data-testid="calculator">
      <Screen
        preResult={result ? `(${result}) ` : ""}
        calculation={calculation || ""}
      />
      <Buttons onClickFunc={updateCalculator} />
    </div>
  )
}
