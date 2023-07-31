import React from "react"

type DigitArrProps = ((arg: string) => void) | undefined

const defaultProps = {
  onClickFunc: null,
}

/**
 * Digit buttons array
 * @param props function that will be executed onClick
 * @returns {React.JSX.Element[]} array of the digit-containing buttons with provided onclick func
 */
export default function DigitArr(props: DigitArrProps): React.JSX.Element[] {
  const onClickFunc = props

  const digits: React.JSX.Element[] = []

  for (let i = 1; i < 10; i += 1) {
    digits.push(
      <button
        type="button"
        className={`digit-button digit-button_${i}`}
        key={i}
        onClick={onClickFunc ? () => onClickFunc(`${i}`) : undefined}
      >
        {i}
      </button>,
    )
  }
  digits.push(
    <button
      type="button"
      onClick={onClickFunc ? () => onClickFunc("0") : undefined}
      className="digit-button digit-button_0"
      key={0}
    >
      {0}
    </button>,
  )

  return digits
}

DigitArr.defaultProps = defaultProps
