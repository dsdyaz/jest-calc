import React from "react"
import "./buttons.css"
import Operators from "../operators/operators.tsx"
import DigitArr from "../digit-buttons/digit-arr.tsx"

type ButtonsProps = {
  onClickFunc?: (arg: string) => void
  deleteFunc?: () => void
}

const defaultProps = {
  onClickFunc: null,
  deleteFunc: null,
}
/**
 * Buttons component, renders digits buttons and operators buttons
 * @param {() => void} onClickFunc - function that will be executed onclick
 * @param {() => void} deleteFunc - special function for delete button
 * @returns {React.JSX.Element} buttons with passed function
 */
export default function Buttons(props: ButtonsProps): React.JSX.Element {
  const { onClickFunc, deleteFunc } = props

  return (
    <div data-testid="buttons-component" className="buttons">
      <div className="buttons__main">
        {DigitArr(onClickFunc)}
        <button
          type="button"
          onClick={onClickFunc ? () => onClickFunc(".") : undefined}
        >
          ,
        </button>
        <button
          type="button"
          className="button-delete"
          onClick={deleteFunc ? () => deleteFunc() : undefined}
        >
          DEL
        </button>
      </div>

      <div className="buttons__operators">
        <Operators onClickFunc={onClickFunc} />
      </div>
    </div>
  )
}

Buttons.defaultProps = defaultProps
