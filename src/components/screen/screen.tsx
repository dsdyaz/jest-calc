import React from "react"

type ScreenProps = {
  preResult: string
  calculation: string
}

export default function Screen(props: ScreenProps): React.JSX.Element {
  const { preResult, calculation } = props
  return (
    <div className="screen">
      <span>{preResult}</span> {calculation}
    </div>
  )
}
