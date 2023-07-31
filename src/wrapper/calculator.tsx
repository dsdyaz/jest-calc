import React, { useState } from "react"
import Screen from "../components/screen/screen"
import Buttons from "../components/buttons/buttons"
import "./calculator.css"

/**
 * Calculator component, contains calculation logic, passes data and functions to inner components
 * @returns {React.JSX.Element} Working calculator
 */
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

  function evaluate() {
    setCalculation(result)
  }

  const deleteLast = () => {
    if (calculation !== "") {
      const value = calculation.slice(0, -1)
      setCalculation(value)
      if (value === "") {
        setResult("")
      } else if (operators.includes(value.slice(-1))) {
        setCalculation(value.slice(0, -1))
        setResult(
          calculate(value.slice(0, -1)) % 1 === 0
            ? calculate(value.slice(0, -1)).toString()
            : calculate(value.slice(0, -1)).toPrecision(3).toString(),
        )
      } else {
        setResult(
          calculate(value) % 1 === 0
            ? calculate(value).toString()
            : calculate(value).toPrecision(3).toString(),
        )
      }
    }
  }

  return (
    <div className="calculator" data-testid="calculator">
      <Screen
        preResult={result ? `(${result}) ` : ""}
        calculation={calculation || ""}
      />
      <Buttons onClickFunc={updateCalculator} deleteFunc={deleteLast} />
      <button className="eval-button" type="button" onClick={evaluate}>
        =
      </button>
    </div>
  )
}
