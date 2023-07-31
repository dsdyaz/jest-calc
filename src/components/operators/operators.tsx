import React from "react"

type OperatorsProps = {
  onClickFunc?: (arg: string) => void
}

const defaultProps = {
  onClickFunc: null,
}
/**
 * Math operators containing buttons component
 * @param { () => void } onClickFunc function that will be executed onclick
 * @returns four buttons with math operators and provided onclick func
 */
export default function Operators(props: OperatorsProps): React.JSX.Element {
  const { onClickFunc } = props

  return (
    <div className="operators" data-testid="operators-buttons">
      <button
        type="button"
        onClick={onClickFunc ? () => onClickFunc("/") : undefined}
      >
        /
      </button>
      <button
        type="button"
        onClick={onClickFunc ? () => onClickFunc("*") : undefined}
      >
        x
      </button>
      <button
        type="button"
        onClick={onClickFunc ? () => onClickFunc("-") : undefined}
      >
        -
      </button>
      <button
        type="button"
        onClick={onClickFunc ? () => onClickFunc("+") : undefined}
      >
        +
      </button>
    </div>
  )
}

Operators.defaultProps = defaultProps
