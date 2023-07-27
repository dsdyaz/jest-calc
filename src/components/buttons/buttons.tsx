import React from "react";
import "../digit-buttons/digit-arr";
import "./buttons.css";
import DigitArr from "../digit-buttons/digit-arr";
import Controls from "../control-buttons/control-buttons";

export default function Buttons(): React.JSX.Element {
  return (
    <div data-testid="buttons-component" className="buttons">
      <div className="buttons__digits">
        {DigitArr()}
        <button>,</button>
      </div>
    </div>
  );
}
