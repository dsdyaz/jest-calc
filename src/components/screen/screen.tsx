import React from "react"
import "./screen.css"

type ScreenProps = {
  preResult?: string
  calculation?: string
}

const defaultProps = {
  preResult: "(0)",
  calculation: "0",
}

export default function Screen(props: ScreenProps): React.JSX.Element {
  const { preResult, calculation } = props
  return (
    <div data-testid="screen" className="screen">
      <span className="pre-result">{preResult}</span> {calculation}
    </div>
  )
}

Screen.defaultProps = defaultProps
