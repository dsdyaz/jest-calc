import React from "react";

export default function DigitArr(): React.JSX.Element[] {
  const digits: React.JSX.Element[] = [];

  for (let i = 1; i < 10; i++) {
    digits.push(
      <button className={`digit-button digit-button_${i}`} key={i}>
        {i}
      </button>,
    );
  }
  digits.push(
    <button className="digit-button digit-button_0" key={0}>
      {0}
    </button>,
  );

  return digits;
}
