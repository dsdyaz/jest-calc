import React from "react";

export default function Controls(): React.JSX.Element {
  return (
    <div className="controls" data-testid="control-buttons">
      <button className="control-button">AC</button>
      <button className="control-button">±</button>
      <button className="control-button">%</button>
    </div>
  );
}
